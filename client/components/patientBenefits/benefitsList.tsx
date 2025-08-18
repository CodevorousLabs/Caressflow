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

      <button
        className="
          relative inline-block px-4 md:px-6 py-3 md:py-5 
          font-rubik text-sm md:text-base lg:text-lg text-white 
          rounded-md bg-[#00C1CF] cursor-pointer overflow-hidden
          transition-transform duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]
          hover:scale-110 hover:shadow-lg

          before:content-[''] before:absolute before:inset-0 before:rounded-md
          before:bg-[#e83185] before:scale-0 before:opacity-100
          before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.02,0.01,0.47,1)]
          hover:before:scale-100
        "
      >
        <span className="relative z-10 drop-shadow-md block text-center">
          ITALYADAKI CARESS FLOW ÇALIŞMALARINI KEŞFEDİN
        </span>
      </button>
    </div>
  )
}
