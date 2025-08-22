import { FaQuoteLeft } from 'react-icons/fa'
import Image from "next/image"

interface ComponentProps {
  feedback: {
    id: number,
    name: string,
    feedback: string,
    PatientImage: string
  }
}

export default function FeedbackCard({ feedback }: ComponentProps) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm bg-[#FCF7FF] p-5 sm:p-6 pt-14 sm:pt-16 rounded-lg shadow-md text-center relative flex flex-col items-center">
      <div className="relative flex justify-center items-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${feedback.PatientImage}`}
            alt={feedback.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-[#e83185] rounded-full p-1.5 sm:p-2 shadow-md">
          <FaQuoteLeft className="text-base sm:text-lg text-white" />
        </div>
      </div>


      <p className="mt-10 sm:mt-12 text-sm sm:text-base text-[#686A6F] mb-3 sm:mb-4 leading-6 sm:leading-7 font-rubik">
        {feedback.feedback}
      </p>


      <p className="text-base sm:text-lg md:text-xl font-semibold text-[#888989] font-heebo">
        {feedback.name}
      </p>
    </div>
  )
}
