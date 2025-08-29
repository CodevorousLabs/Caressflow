'use client'
import { Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps'
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
  const geocodingLib = useMapsLibrary('geocoding');
  const [zoom, setZoom] = useState<number | null>(6)
  const [defaultFocus, setDefaultFocus] = useState<{ lat: number, lng: number } | null>({ lat: 39.925533, lng: 32.866287 })
  const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID

  useEffect(() => {
    if (!geocodingLib) return;

    const geocoder = new geocodingLib.Geocoder();
    clinics.forEach((clinic, i) => {

      geocoder.geocode({ address: clinic.hospitalName }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const loc = results[0].geometry.location;
          setClinicList((prev) => {
            const oldList = [...prev];
            oldList[i].location = { lat: loc.lat(), lng: loc.lng() };
            return oldList;
          });
        } else {
          console.warn(`Geocode failed for ${clinic.hospitalName}: ${status}`);
        }
      });
    });

  }, [geocodingLib, clinics]);

  function resetValues() {
    setFocusedClinic(null)
    setDefaultFocus(null)
    setZoom(null)
  }


  return (
    <div className="flex w-full items-start justify-start min-h-[500px] p-10 mb-5 bg-[#F7F7F7]">
      <div className="flex w-full items-start justify-start min-h-[500px] space-x-3">
        <div className='w-1/2 max-h-[50vh] overflow-scroll overflow-x-hidden'>
          {clinicList.length > 0 && clinicList.map((clinic) =>
            <AddressCard key={clinic.id} clinic={clinic} setFocusedClinic={setFocusedClinic} setZoom={setZoom} />
          )
          }
        </div>
        <div className="flex flex-col w-full" style={{ height: "50vh" }}>
          <Map id={MAP_ID} center={focusedClinic ? focusedClinic : defaultFocus} zoom={zoom} onMouseover={() => resetValues()}>
            {clinicList.length > 0 && clinicList.map((clinic) =>
              <Marker key={clinic.id} position={clinic.location} />
            )
            }
          </Map>
        </div>
      </div>
    </div>

  )
}