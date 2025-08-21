import SectionTitle from "../../reusableComponents/sectionTitle"
import SectionDescription from "../../reusableComponents/sectionDescription"
import NewsCard from "./newsCard"
import readNews from "@/lib/readNews"
export default async function News() {

  const news = await readNews()

  return (
    <div
      className="max-w-[1280px] mx-auto flex flex-col justify-center items-center py-[150px]"
    >
      <div className="flex flex-col justify-center items-center space-y-5 z-10">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Yayınlar ve Haberler</SectionDescription>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
        {news.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>

      <SectionTitle>CARESS FLOW</SectionTitle>
    </div>
  )
}