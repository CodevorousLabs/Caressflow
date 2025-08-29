'use client'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, Marker } from '@vis.gl/react-google-maps'

export default function MapComponent() {

  const API_KEY = process.env.NEXT_PUBLIC_MAPS_API
  const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID

  const testPosition = { lat: 53.54, lng: 10 }

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="flex w-full items-start justify-start min-h-[500px]">
        <div className="flex flex-col w-full" style={{ height: "50vh", width: "100vh" }}>
          <Map id={MAP_ID}>
            <Marker position={testPosition} />
          </Map>
        </div>
      </div>
    </APIProvider >
  )
}