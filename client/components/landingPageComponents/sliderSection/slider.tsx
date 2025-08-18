'use client'
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import lale from "../../../assets/lale.jpg";
import ilac from "@/assets/ilac.jpg";
import caressFlowDevrimi from "@/assets/caressFlowDevrimi.jpg";
import { motion } from "motion/react"
const sliderData = [
  {
    title: "Yenilikçi ve Güvenilir Tedavi: Caress Flow",
    description: "Genital Sağlıkta Yeni Nesil Tedavi!",
    anchorData: "/terapi",
    imageUrl: "/assets/sliderVideo.mp4"
  },
  {
    title: "Yenilikçi ve Güvenilir Tedavi: Caress Flow",
    description: "Genital Sağlıkta Yeni Nesil Tedavi!",
    anchorData: "/terapi",
    imageUrl: lale
  },
  {
    title: "Caress Flow Devrimi",
    description: "Kadınların Cinsel Sağlığı İçin Yeni Bir Tedavi!",
    anchorData: "/yayin",
    imageUrl: caressFlowDevrimi
  },
  {
    title: "İlaçsız ve Ağrısız Tedavi",
    description: "Oksijen ve Hyaluronik Asitin Mükemmel Uyumu!",
    anchorData: "/oksijen-hyaluronik-asit",
    imageUrl: ilac
  }
]

export default function Slider() {

  const [sliderIndex, setSliderIndex] = useState<number>(0)

  function nextSlide() {
    setSliderIndex(prev => prev !== 3 ? prev += 1 : 0)
  }

  function prevSlide() {
    setSliderIndex(prev => prev !== 0 ? prev -= 1 : 3)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[830px] overflow-hidden font-heebo">

      {sliderIndex > 0 && <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#930b5c]/40 z-10" />}

      {sliderIndex === 0 ?
        <video controls autoPlay={true} loop={true} className="absolute w-full inset-0 sm:bg-top transition-all duration-700">
          <source src="/assets/sliderVideo.mp4" type="video/mp4" />
        </video>
        :
        <motion.div
          className="absolute inset-0 bg-cover bg-center sm:bg-top transition-all duration-700"
          style={{
            backgroundImage: `url(${sliderData[sliderIndex].imageUrl.src})`,
          }} />
      }


      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-2">
        <div className="flex flex-col w-full justify-around space-y-20 h-1/2 items-center z-40">
          <div className="space-y-4 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              {sliderData[sliderIndex].title}
            </p>
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {sliderData[sliderIndex].description}
            </p>
          </div>

          <div className="w-full sm:w-3/5 md:w-1/2 lg:w-1/6">
            <a
              href={sliderData[sliderIndex].anchorData}
              className="bg-[#00ACB1] hover:bg-[#00787b] w-full transition p-3 sm:p-4 rounded-lg shadow-lg text-white font-semibold text-xs sm:text-sm md:text-base cursor-pointer block"
            >
              <button className="w-full font-bold cursor-pointer">Daha Fazla Bilgi +</button>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-[#00ACB1] hover:bg-[#00787b] p-3 rounded-full shadow-lg text-white cursor-pointer"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-[#00ACB1] hover:bg-[#00787b] p-3 rounded-full shadow-lg text-white cursor-pointer"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>
    </motion.div>
  )
}