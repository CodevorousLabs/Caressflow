import Link from "next/link"
import Image from "next/image"

interface ComponentProps {
  news: any
}

export default function NewsCard({ news }: ComponentProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-xs overflow-hidden flex flex-col justify-between p-3">
      <div className="overflow-hidden h-[272px] relative">
        <Link href={news.title}>
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            className="bg-white absolute rounded-md shadow-sm hover:scale-110 duration-150"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        <Link href={news.title}>
          <p className="text-lg font-semibold text-[#888989] hover:text-pink-600 transition duration-200 mb-3">
            {news.title}
          </p>
        </Link>
        <Link href={news.title}>
          <p className="text-pink-600 font-bold">Devamını Oku</p>
        </Link>
      </div>
    </div>
  );
}