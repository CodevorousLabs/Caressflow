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
    <div
      className="max-w-[1280px] mx-auto flex flex-col justify-center items-center py-[150px]"
    >
      <div className="flex flex-col justify-center items-center space-y-5 z-10">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Yayınlar ve Haberler</SectionDescription>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
        {staticData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>

      <SectionTitle>CARESS FLOW</SectionTitle>
    </div>
  )
}