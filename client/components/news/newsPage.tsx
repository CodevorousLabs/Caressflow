import MainComponent from "../reusableComponents/mainComponent"
import SectionDescription from "../reusableComponents/sectionDescription"
import NewsCard from "../landingPageComponents/news/newsCard"
import haber1 from "@/public/assets/newsAssets/haber1.png"
const staticData = [
  {
    title: "Caress Flow bugün Torino'da açık hava konferansında!",
    imageUrl: haber1
  },
  {
    title: "Caress Flow bugün Torino'da açık hava konferansında!",
    imageUrl: haber1
  },
  {
    title: "Caress Flow bugün Torino'da açık hava konferansında!",
    imageUrl: haber1
  },
  {
    title: "Caress Flow bugün Torino'da açık hava konferansında!",
    imageUrl: haber1
  },
  {
    title: "Caress Flow bugün Torino'da açık hava konferansında!",
    imageUrl: haber1
  },
]

export default function NewsPage() {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <div className="flex flex-col justify-start items-start text-left">
            <SectionDescription>Haberler</SectionDescription>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
            {staticData.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </div>
      </section>
    </MainComponent>
  )
}