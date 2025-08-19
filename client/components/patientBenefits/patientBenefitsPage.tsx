import Benefits from "./benefits"
import InformationContainer from "../reusableComponents/informationContainer"
import FaqSection from "./faqSection"
import MainComponent from "../reusableComponents/mainComponent"

export default function PatientBenefitsPage() {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <Benefits />
        <div className="w-full items-center justify-center flex">
          <InformationContainer title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
        <FaqSection />
      </section>
    </MainComponent>
  )
}