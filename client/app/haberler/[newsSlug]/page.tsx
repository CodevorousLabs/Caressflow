import readNew from "@/lib/readNew"
interface ComponentProps {
  params: Promise<{ newsSlug: string }>
}

export default async function Page({ params }: ComponentProps) {

  const { newsSlug } = await params

  const chosenNew = await readNew(newsSlug)

  return (
    <p>test</p>
  )
}