import { TbHeartPlus } from "react-icons/tb";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { CiMedicalClipboard } from "react-icons/ci";

import bg from "@/assets/backgroundTexture.jpg"
import FeatureCard from "./featureCard"

const staticData = [
  {
    Icon: LiaStethoscopeSolid,
    title: "Moleküler Oksijen",
    description: "Mikrosirkülasyonu tetikleyerek Neoanjiojenez (yeni kan damarı oluşumu)'nu teşvik eder. Doku yenilenmesini destekler. Trofizmi artırır ve doku elastisitesini iyileştirerek hücre yenilenmesini uyarır"
  },
  {
    Icon: TbHeartPlus,
    title: "Garantili Sonuçlar",
    description: "Caress Flow, lokal anestezi gerektirmeyen, doğal, ağrısız ve risksiz bir tedavi sunar. Bu tedavi, oksijen ve hyaluronik asidin benzersiz bir kombinasyonunu kullanarak ilk uygulamadan itibaren kesin sonuçlar sağlar."
  },
  {
    Icon: CiMedicalClipboard,
    title: "6 hastalık için 1 sistem",
    specs: ["Vestibülit", "Vulvavajinal Atrofi", "Üriner İnkontinans", "Tekrarlayan Kandida", "Üretral Yanma", "Lichen"]
  }
]

export default function Features() {
  return (
    <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative" style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center', }}>
      
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div className="flex flex-col justify-center items-center space-y-5 z-10">
        <p className="text-[15px] text-pink-bg mb-[10px] font-rubik">CARESS FLOW</p>
        <p className="text-[#888989] text-[58px] mb-[20px] font-bold font-heebo">Bilimle Gelen Sağlık</p>
      </div>

      <div className="flex w-full items-start justify-center gap-5 z-10">
        {staticData.map((feat) =>
          <FeatureCard key={feat.title} feat={feat} Icon={feat.Icon} />
        )}
      </div>

    </div>
  )
}