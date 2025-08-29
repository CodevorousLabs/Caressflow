'use client'

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, Marker } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

interface ComponentProps {
  clinics: any
}

export default function MapComponent({ clinics }: ComponentProps) {

  const [clinicList, setClinicList] = useState(clinics)
  const API_KEY = process.env.NEXT_PUBLIC_MAPS_API
  const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();

    clinics.forEach((clinic, i: number) => {
      geocoder.geocode({ address: clinic.adress }, (results, status) => {
        if (status === "OK" && results[0]) {
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

  console.log(clinicList)

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="flex w-full items-start justify-start min-h-[500px]">

        <div className='w-1/2'>
          <p>test</p>
        </div>


        <div className="flex flex-col w-full" style={{ height: "50vh" }}>
          <Map id={MAP_ID} defaultZoom={10}>
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