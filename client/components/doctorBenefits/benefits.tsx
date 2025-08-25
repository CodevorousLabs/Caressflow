import SectionTitle from "../reusableComponents/sectionTitle"
import SectionDescription from "../reusableComponents/sectionDescription"
import AnimatedButton from "../reusableComponents/animatedButton"
import readDoctorBenefits from "@/lib/readDoctorBenefits"

interface BenefitType {
  bold: string,
  content: string
}

export default async function Benefits() {

  const doctorBenefits = await readDoctorBenefits()
  const benefits = doctorBenefits[0].benefits.blocks[0].data.items
  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
      <div className="flex flex-col justify-start items-start text-left">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Doktorlar ve Profesyoneller için Faydalar</SectionDescription>
      </div>

      <div className="flex flex-col justify-start items-start text-left space-y-5">
        <p className="text-black text-[32px] font-semibold font-heebo">Hastalarınıza yenilikçi, etkili ve güvenli bir hizmet sunmak ister misiniz?</p>
        <p className="text-gray-text font-rubik">6 rahatsızlığın tedavisi için yeni BASİT ve DOĞAL yaklaşım olan CARESS FLOW'u keşfedin.</p>

        <AnimatedButton>
          CARESS FLOW'U 1 AY BOYUNCA MUAYENEHANENİZDE ÜCRETSİZ DENEYİN
        </AnimatedButton>
      </div>

      <ul className="space-y-3 md:space-y-4 lg:space-y-5 list-disc pl-5 font-rubik">
        {benefits.map((benefit: BenefitType) => (
          <li
            key={benefit.content}
            className="text-base md:text-xl lg:text-2xl text-gray-text"
            dangerouslySetInnerHTML={{ __html: benefit.content }}
          />
        ))}
      </ul>
    </div>
  )
}
