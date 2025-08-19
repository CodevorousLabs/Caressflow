
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import lale from "@/public/assets/lale.jpg";
import ilac from "@/public/assets/ilac.jpg";
import caressFlowDevrimi from "@/public/assets/caressFlowDevrimi.jpg";

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


  return (
    <Carousel className="w-full h-[830px] relative overflow-hidden">
      <CarouselContent className="flex h-[830px]">

        {sliderData.map((asset, index) => (
          <CarouselItem key={index} className="relative h-[830px] flex justify-center items-center">
            {index > 0 &&
              <>
                <div className="absolute inset-0 bg-[#930b5c]/40 z-10" />
                <Image
                  src={asset.imageUrl}
                  alt="asset"
                  fill
                  className="object-cover absolute"
                />
              </>
            }

            {index === 0 &&
              <video autoPlay={true} loop={true} muted className="absolute w-full inset-0 sm:bg-top">
                <source src="/assets/sliderVideo.mp4" type="video/mp4" />
              </video>
            }


            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-2">
              <div className="flex flex-col w-full justify-around space-y-20 h-1/2 items-center z-40">
                <div className="space-y-4 sm:space-y-8">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {asset.title}
                  </p>
                  <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {asset.description}
                  </p>
                </div>

                <div className="w-full sm:w-3/5 md:w-1/2 lg:w-1/6">
                  <a
                    href={asset.anchorData}
                    className="bg-[#00ACB1] hover:bg-[#00787b] w-full transition p-3 sm:p-4 rounded-lg shadow-lg text-white font-semibold text-xs sm:text-sm md:text-base cursor-pointer block"
                  >
                    <button className="w-full font-bold cursor-pointer">Daha Fazla Bilgi +</button>
                  </a>
                </div>
              </div>
            </div>

          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#00ACB1] hover:bg-[#00787b] p-3 rounded-full shadow-lg text-white cursor-pointer"
      />

      <CarouselNext
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#00ACB1] hover:bg-[#00787b] p-3 rounded-full shadow-lg text-white cursor-pointer"
      />
    </Carousel>
  )
}