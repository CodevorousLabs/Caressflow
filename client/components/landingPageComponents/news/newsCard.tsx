import Link from "next/link"
import Image from "next/image"

interface ComponentProps {
  news: any
}

export default function NewsCard({ news }: ComponentProps) {
  return (
    <div className="flex flex-col justify-between space-y-5 items-start p-5 bg-white rounded-md max-w-[300px]">
      <div className="overflow-hidden w-full h-[300px]">
        <Link href={news.title}>
          <Image
            src={news.imageUrl}
            alt={news.imageUrl}
            width={300}
            height={200}
            className="rounded-lg hover:scale-110 duration-200"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        <Link
          href={news.title}
          className="font-rubik text-[22px] text-gray-text font-medium hover:text-pink-bg duration-150"
        >
          {news.title}
        </Link>
        <Link href={news.title} className="text-pink-bg font-heebo font-bold">
          Devamını Oku
        </Link>
      </div>
    </div>
  );
}