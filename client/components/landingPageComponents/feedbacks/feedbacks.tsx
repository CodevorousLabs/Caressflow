import bg from '@/public/assets/backgroundTexture.jpg'
import SectionTitle from "../../reusableComponents/sectionTitle"
import SectionDescription from "../../reusableComponents/sectionDescription"
import FeedbackCard from './feedbackCard'
import readPatientFeedbacks from "@/lib/readPatientFeedbacks"

export default async function Feedbacks() {

  const patientFeedbacks = await readPatientFeedbacks()

  return (
    <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative" style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center', }}>
      <div className="flex flex-col justify-center items-center space-y-5 z-10">
        <SectionTitle>CARESS FLOW tedavisinden sonra</SectionTitle>
        <SectionDescription>Memnun Kalan Hastalar</SectionDescription>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {patientFeedbacks.map((fb) => (
          <FeedbackCard key={fb.name} feedback={fb} />
        ))}
      </div>
    </div>
  )
}