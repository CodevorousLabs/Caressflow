import AnimatedButton from "../reusableComponents/animatedButton"
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

export default function BenefitsList() {
  return (
    <div className="flex flex-col items-start justify-start space-y-8 md:space-y-10 lg:space-y-12">
      <p className="font-rubik text-lg md:text-xl lg:text-[32px] leading-snug">
        Doğal, oksijen bazlı, invaziv olmayan, keyifli ve risksiz bir tedavi.
      </p>

      <ul className="space-y-3 md:space-y-4 lg:space-y-5 list-disc pl-5 font-rubik">
        {benefitsData.map((benefit: BenefitType) =>
          <li key={benefit.text} className="text-base md:text-xl lg:text-2xl text-gray-text">
            <span className=" text-black text-base md:text-xl lg:text-2xl">
              {benefit.bold}
            </span> {benefit.text}
          </li>
        )}
      </ul>

      <AnimatedButton>
        ITALYADAKI CARESS FLOW ÇALIŞMALARINI KEŞFEDİN
      </AnimatedButton>
    </div>
  )
}
