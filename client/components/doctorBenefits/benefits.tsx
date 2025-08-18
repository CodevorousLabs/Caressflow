import SectionTitle from "../landingPageComponents/sectionTitle"
import SectionDescription from "../landingPageComponents/sectionDescription"

const benefitsData = [
  { bold: "MAKSİMUM HİJYEN", text: "tek kullanımlık sarf malzemelerinin kullanımı sayesinde." },
  { bold: "BASİT, TAŞINILABİLİR", text: "kullanımı kolay ve muaynehaneye kolayca sığarÇ" },
  { bold: "HIZLI", text: "tedavi 15 dakika sürer" },
  { bold: "GÜVENLİ", text: "herhangi bir kontrendikasyon yoktur" },
  { bold: "KARLI", text: "tıbbi reçete üzerine uzman personel tarafından yapılabilir" }
]

interface BenefitType {
  bold: string,
  text: string
}

export default function Benefits() {
  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
      <div className="flex flex-col justify-start items-start text-left">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Doktorlar ve Profesyoneller için Faydalar</SectionDescription>
      </div>

      <div className="flex flex-col justify-start items-start text-left space-y-5">
        <p className="text-black text-[32px] font-semibold font-heebo">Hastalarınıza yenilikçi, etkili ve güvenli bir hizmet sunmak ister misiniz?</p>
        <p className="text-gray-text font-rubik">6 rahatsızlığın tedavisi için yeni BASİT ve DOĞAL yaklaşım olan CARESS FLOW'u keşfedin.</p>

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
            CARESS FLOW'U 1 AY BOYUNCA MUAYENEHANENİZDE ÜCRETSİZ DENEYİN
          </span>
        </button>
      </div>

      <ul className="space-y-3 md:space-y-4 lg:space-y-5 list-disc pl-5 font-rubik">
        {benefitsData.map((benefit: BenefitType) =>
          <li key={benefit.text} className="text-base md:text-xl lg:text-2xl text-gray-text">
            <span className=" text-black text-base md:text-xl lg:text-2xl">
              {benefit.bold}
            </span> {benefit.text}
          </li>
        )}
      </ul>
    </div>
  )
}
