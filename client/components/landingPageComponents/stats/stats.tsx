'use client'
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import StatCard from "./statCard"
const staticData = [
  {
    title: "İyileşen Hastalar",
    statNumber: 5400,
    statTimer: 0.8
  },
  {
    title: "Uygulama Klinikleri",
    statNumber: 220,
    statTimer: 2
  },
  {
    title: "Yıllık Deneyim",
    statNumber: 5,
    statTimer: 3
  },
  {
    title: "Doktorlar ve Uzmanlar",
    statNumber: 380,
    statTimer: 1
  }
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    /* This fires the component so we can re-render the component and statistics animations */
  }, [isInView])

  return (
    <div ref={ref} className="relative w-full max-lg:h-[250px]">
      {isInView && (
        <div className="
          absolute 
          left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 

          bg-[#00ACB0] 
          w-10/12 max-w-6xl 
          min-h-[200px]

          grid
          grid-cols-1
          gap-x-6 gap-y-6
          justify-items-center
          items-center

          md:grid-cols-2
          lg:grid-cols-4

          max-lg:py-8
        ">
          {staticData.map((stat) =>
            <StatCard key={stat.title} stat={stat} />
          )}
        </div>
      )}
    </div>
  )
}
