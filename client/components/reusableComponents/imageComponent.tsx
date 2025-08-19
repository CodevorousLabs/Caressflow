import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface ComponentProps {
  imageUrl: StaticImport
}

export default function ImageComponent({ imageUrl }: ComponentProps) {
  return (
    <div className='w-full'>
      <Image
        src={imageUrl}
        alt='doctorTechImage'
        className='w-full h-auto rounded-md object-cover'
        sizes="(max-width: 768px) 100vw,
                 (max-width: 1024px) 80vw,
                 60vw"
      />
    </div>
  )
}