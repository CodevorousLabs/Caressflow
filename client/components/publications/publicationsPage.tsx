import bg from "@/assets/backgroundTexture.jpg"
import SectionTitle from "../landingPageComponents/sectionTitle"
import SectionDescription from "../landingPageComponents/sectionDescription"
import AnimatedButton from "../reusableComponents/animatedButton"
import ImageComponent from "../reusableComponents/imageComponent"
import publics1 from "@/assets/publicsPage/publics1.png"
import publics2 from "@/assets/publicsPage/publics2.png"
import InformationContainer from "../reusableComponents/informationContainer"
export default function PublicationsPage() {
  return (
    <main className="relative" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "cover",
      backgroundPosition: 'center'
    }}>

      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <div className="flex flex-col justify-start items-start text-left">
            <SectionTitle>CARESS FLOW</SectionTitle>
            <SectionDescription>Doktorlar ve Profesyoneller için Faydalar</SectionDescription>
          </div>
          <ImageComponent imageUrl={publics1} />
          <div className="flex justify-center items-center w-full">
            <AnimatedButton>BİLİMSEL YAYINLAR</AnimatedButton>
          </div>
          <ImageComponent imageUrl={publics2} />
          <div className="flex justify-center items-center w-full">
            <AnimatedButton>BİLİMSEL YAYINLAR</AnimatedButton>
          </div>
        </div>

        <div className="w-full items-center justify-center flex">
          <InformationContainer title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
      </section>
    </main>
  )
}