import readNew from "@/lib/readNew"
import SingleNewPage from "@/components/news/singleNew/singleNewPage"
interface ComponentProps {
  params: Promise<{ newsSlug: string }>
}

export default async function Page({ params }: ComponentProps) {

  const { newsSlug } = await params

  const chosenNew = await readNew(newsSlug)

  return (
    <SingleNewPage chosenNew={chosenNew} />
  )
}