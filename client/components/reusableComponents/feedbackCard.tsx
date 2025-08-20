import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { FaQuoteLeft } from 'react-icons/fa'
import Image from "next/image"

interface ComponentProps {
  feedback: {
    name: string,
    comment: string,
    imageURL: StaticImport | string
  }
}

export default function FeedbackCard({ feedback }: ComponentProps) {
  return (
    <div className="w-full max-w-sm bg-[#FCF7FF] p-6 pt-16 rounded-lg shadow-lg text-center relative flex flex-col items-center">
      <div className="relative flex justify-center items-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={feedback.imageURL}
            alt={feedback.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-[#e83185] rounded-full p-2 shadow-md">
          <FaQuoteLeft className="text-lg text-white" />
        </div>
      </div>

      <p className="mt-12 text-[16px] text-[#686A6F] mb-4 leading-7 font-rubik">
        {feedback.comment}
      </p>

      <p className="text-[20px] font-semibold text-[#888989] font-heebo">
        {feedback.name}
      </p>
    </div>
  )
}
