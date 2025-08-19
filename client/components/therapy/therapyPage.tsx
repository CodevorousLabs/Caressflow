import MainComponent from "../reusableComponents/mainComponent"
import SectionTitle from "../reusableComponents/sectionTitle"
import SectionDescription from "../reusableComponents/sectionDescription"
import InformationContainer from "../reusableComponents/informationContainer"
import ImageComponent from "../reusableComponents/imageComponent"
import ProtocolPic from "@/public/assets/therapyPage/protokolPic.png"

export default function TherapyPage() {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <div className="flex flex-col justify-start items-start text-left">
            <SectionTitle>PROTOKOLLER</SectionTitle>
            <SectionDescription>CARESS FLOW</SectionDescription>
          </div>

          <SectionDescription>VULVOVAJİNAL ATROFİ VE İDRAR KAÇIRMA</SectionDescription>
          <ImageComponent imageUrl={ProtocolPic} />
        </div>

        <div className="w-full items-center justify-center flex">
          <InformationContainer title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
      </section>
    </MainComponent>
  )
}