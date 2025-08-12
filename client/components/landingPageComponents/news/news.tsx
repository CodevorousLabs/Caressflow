import SectionTitle from "../sectionTitle"
import SectionDescription from "../sectionDescription"
import NewsCard from "./newsCard"

import turkey from '@/assets/newsAssets/haber1.png'
import why from '@/assets/newsAssets/haber2.png'
import oxygen from '@/assets/newsAssets/haber3.png'
import liquid from '@/assets/newsAssets/haber4.png'
import vest from '@/assets/newsAssets/haber5.png'
import birth from '@/assets/newsAssets/haber6.png'


const staticData = [
  {
    title: "Caress Flow artık Türkiye'de!",
    imageUrl: turkey
  },
  {
    title: "Neden CaressFlow Tercih Edilmeli?",
    imageUrl: why
  },
  {
    title: "Oksijen ve Hyaluronik Asitin Mükemmel Uyumu",
    imageUrl: oxygen
  },
  {
    title: "Kaybettiğiniz Nemi Geri Kazanmak İster Misiniz?",
    imageUrl: liquid
  },
  {
    title: "Vestibülit & Vajinismus",
    imageUrl: vest
  },
  {
    title: "Doğumdan Sonra Kendini Bul!",
    imageUrl: birth
  }
]


export default function News() {
  return (
    <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative bg-[#FCF7FF]">

      <div className="flex flex-col justify-center items-center space-y-5 z-10">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Yayınlar ve Haberler</SectionDescription>
      </div>

      <div className="grid grid-cols-3 gap-5 w-9/12 z-10">
        {staticData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>

    </div>
  )
}