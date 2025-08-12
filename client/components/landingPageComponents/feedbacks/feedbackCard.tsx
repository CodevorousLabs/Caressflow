import { FaQuoteLeft } from 'react-icons/fa'

interface ComponetProps {
  feedback: any
}
export default function FeedbackCard({ feedback }: ComponetProps) {
  return (
    <div className="max-w-sm w-full bg-[#FCF7FF] p-6 pt-12 rounded-lg shadow-lg text-center relative">
      <div className="absolute top-5 -right-2 bg-[#e83185] rounded-full p-2">
        <FaQuoteLeft className="text-lg text-white" />
      </div>
      <p className="text-[16px] text-[#686A6F] mb-4 leading-9 font-rubik">{feedback.feedback}</p>
      <p className="text-[20px] font-semibold text-[#888989] font-heebo">{feedback.name}</p>
    </div>
  )
}