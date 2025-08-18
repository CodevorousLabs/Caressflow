import bg from "@/assets/backgroundTexture.jpg"
import Benefits from "./benefits"
import TryForFree from "./informationContainer"
import FaqSection from "./faqSection"
export default function PatientBenefitsPage() {
  return (
    <main className="relative" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "cover",
      backgroundPosition: 'center'
    }}>

      <section className="w-full mx-auto flex flex-col items-start">
        <Benefits />
        <div className="w-full items-center justify-center flex">
          <TryForFree title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
        <FaqSection />
        <div className="w-full items-center justify-center flex">
          <TryForFree title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />
        </div>
      </section>
    </main>
  )
}