import MainComponent from "../reusableComponents/mainComponent"
import bg from "@/public/assets/backgroundTexture.jpg"
import Benefits from "./benefits"
import InformationContainer from "../reusableComponents/informationContainer"
import ImageSection from "./imageSection"
export default function DoctorBenefitsPage() {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <Benefits />
        <div className="w-full items-center justify-center flex">
          <InformationContainer title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
        <ImageSection />
        <div className="w-full items-center justify-center flex">
          <InformationContainer title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
      </section>
    </MainComponent>
  )
}