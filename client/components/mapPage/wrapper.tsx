'use client'
import { APIProvider } from '@vis.gl/react-google-maps'

export default function MapContext({ children }: {children: React.ReactNode}) {
  const API_KEY = process.env.NEXT_PUBLIC_MAPS_API
  return (
    <APIProvider apiKey={API_KEY!} libraries={['geocoding']}>
      {children}
    </APIProvider>
  )
}