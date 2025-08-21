import Link from "next/link"
import Image from "next/image"

interface ComponentProps {
  publishedNew: {
    slug?: string,
    user_created?: string,
    date_created?: string, //ISO
    user_updated?: string,
    date_updated?: string,
    title?: string,
    Image?: string // File Path
  }
}

export default function NewsCard({ publishedNew }: ComponentProps) {

  if (!publishedNew) {
    return (
      <p>Haber bunulamadı.</p>
    )
  } else {
    return (
      <div className="bg-white rounded-lg shadow-lg max-w-xs overflow-hidden flex flex-col justify-between p-3">
        <div className="overflow-hidden h-[272px] relative">
          <Link href={`haberler/${publishedNew.slug}`}>
            <div className="relative h-full w-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${publishedNew.Image}`}
                alt={"News Image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="bg-white absolute rounded-md shadow-sm hover:scale-110 duration-150"
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col">
          <Link href={`haberler/${publishedNew.slug}`}>
            <p className="text-lg font-semibold text-[#888989] hover:text-pink-600 transition duration-200 mb-3">
              {publishedNew.title}
            </p>
          </Link>
          <Link href={`haberler/${publishedNew.slug}`}>
            <p className="text-pink-600 font-bold">Devamını Oku</p>
          </Link>
        </div>
      </div>
    );
  }
}