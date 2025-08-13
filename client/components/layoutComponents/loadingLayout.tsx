'use client'
import { useState, useEffect } from "react"
import LoadingComponent from "./loadingComponent"
export default function LoadingLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-pink-bg text-white text-2xl font-bold">
        <LoadingComponent />
      </div>
    )
  }

  return <>{children}</>
}