import AnimatedButton from "../reusableComponents/animatedButton"
import readPatientBenefits from "@/lib/readPatientBenefits"
const benefitsData = [
  { bold: "GÜVENLİ", text: "hiçbir kontrendikasyonu veya yan etkisi yoktur" },
  { bold: "ETKİLİ", text: "ilk tedaviden itibaren fark edilebilir sonuçlar" },
  { bold: "AĞRISIZ", text: "tedavi keyifli ve invaziv değildir" },
  { bold: "HIZLI", text: "tedavi 15 dakika sürer" },
  { bold: "İYİLEŞME SÜRESİ GEREKMİYOR", text: "alışkanlıklarınıza hemen geri dönebilirsiniz" }
]

interface BenefitType {
  bold: string,
  text: string
}

export default async function BenefitsList() {

  const patientBenefits = await readPatientBenefits()
  const benefits = patientBenefits[0].benefits.blocks[0].data.items


  return (
    <div className="flex flex-col items-start justify-start space-y-8 md:space-y-10 lg:space-y-12">
      <p className="font-rubik text-lg md:text-xl lg:text-[32px] leading-snug">
        Doğal, oksijen bazlı, invaziv olmayan, keyifli ve risksiz bir tedavi.
      </p>

      <ul className="space-y-3 md:space-y-4 lg:space-y-5 list-disc pl-5 font-rubik">
        {benefits.map((benefit: BenefitType) => (
          <li
            key={benefit.text}
            className="text-base md:text-xl lg:text-2xl text-gray-text"
            dangerouslySetInnerHTML={{ __html: benefit.text }}
          />
        ))}
      </ul>

      <AnimatedButton>
        ITALYADAKI CARESS FLOW ÇALIŞMALARINI KEŞFEDİN
      </AnimatedButton>
    </div>
  )
}
