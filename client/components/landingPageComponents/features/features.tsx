import { TbHeartPlus } from "react-icons/tb";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { CiMedicalClipboard } from "react-icons/ci";
import { FeatureType } from "@/Types/GlobalTypes";
import FeatureCard from "./featureCard"
import SectionTitle from "../sectionTitle";
import SectionDescription from "@/components/landingPageComponents/sectionDescription";


const staticData: FeatureType[] = [
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
    <div className="flex flex-col w-full justify-center items-center px-6 py-20 relative mb-28">
      <div className="flex flex-col justify-center items-center space-y-3 z-10 text-center">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Bilimle Gelen Sağlık</SectionDescription>
      </div>

   
      <div className="flex flex-wrap w-full items-stretch justify-center gap-6 z-10 mt-10">
        {staticData.map((feat: FeatureType) => (
          <FeatureCard key={feat.title} feat={feat} Icon={feat.Icon} />
        ))}
      </div>
    </div>
  )
}