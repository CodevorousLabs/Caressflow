import MainComponent from "../reusableComponents/mainComponent"
import SectionDescription from "../reusableComponents/sectionDescription"
import NewsCard from "../landingPageComponents/news/newsCard"
import readNews from "@/lib/readNews"

export default async function NewsPage() {

  const news = await readNews()

  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <div className="flex flex-col justify-start items-start text-left">
            <SectionDescription>Haberler</SectionDescription>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
            {news.map((publishedNew) => (
              <NewsCard key={publishedNew.slug} publishedNew={publishedNew} />
            ))}
          </div>
        </div>
      </section>
    </MainComponent>
  )
}