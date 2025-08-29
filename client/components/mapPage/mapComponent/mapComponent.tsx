'use client'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'
import AddressCard from './addressCard'

interface ClinicType {
  adress: string,
  date_created: string,
  date_updated: string,
  doctorName: string,
  hospitalName: string,
  id: number,
  phoneNumber: string,
  location?: { lat: number, lng: number }
}

interface ComponentProps {
  clinics: ClinicType[]
}

export default function MapComponent({ clinics }: ComponentProps) {

  const [clinicList, setClinicList] = useState(clinics)
  const [focusedClinic, setFocusedClinic] = useState(null)
  const API_KEY = process.env.NEXT_PUBLIC_MAPS_API
  const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();

    clinics.forEach((clinic, i: number) => {
      geocoder.geocode({ address: clinic.adress }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const loc = results[0].geometry.location
          setClinicList((prev) => {
            const oldList = [...prev]
            const chosenClinic = oldList[i]
            chosenClinic.location = { lat: loc.lat(), lng: loc.lng() }
            return oldList
          });
        } else {
          console.warn(`Geocode failed for ${clinic}: ${status}`);
        }
      });
    });
  }, []);

  return (
    <APIProvider apiKey={API_KEY!}>
      <div className="flex w-full items-start justify-start min-h-[500px]">
        <div className='w-1/2 max-h-[50vh] overflow-scroll overflow-x-hidden'>
          {clinicList.length > 0 && clinicList.map((clinic) =>
            <AddressCard key={clinic.id} clinic={clinic} setFocusedClinic={setFocusedClinic} />
          )
          }
        </div>

        <div className="flex flex-col w-full" style={{ height: "50vh" }}>
          <Map id={MAP_ID} center={focusedClinic && focusedClinic} onMouseover={() => setFocusedClinic(null)}>
            {clinicList.length > 0 && clinicList.map((clinic) =>
              <Marker key={clinic.id} position={clinic.location} />
            )
            }
          </Map>
        </div>
      </div>
    </APIProvider >
  )
}