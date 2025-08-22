import MainComponent from "@/components/reusableComponents/mainComponent"
import FeedbackCard from "@/components/reusableComponents/feedbackCard"
import SectionDescription from "@/components/reusableComponents/sectionDescription"
import readPatientFeedbacks from "@/lib/readPatientFeedbacks"


export default async function PatientFeedbacksPage() {

  const patientFeedbacks = await readPatientFeedbacks()

  return (
    <MainComponent>
      <div className="flex flex-col w-full justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 lg:py-28 space-y-12 md:space-y-16">

        <div className="flex flex-col justify-center items-center space-y-4 z-10 text-center px-2">
          <SectionDescription>Hasta Yorumları</SectionDescription>
        </div>


        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full md:w-10/12 lg:w-8/12">
          <p className="font-heebo text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
            6 PATOLOJİNİN tedavisine yönelik yeni BASİT ve DOĞAL yaklaşımı keşfedin
          </p>
          <p className="font-rubik text-gray-text text-sm sm:text-base leading-relaxed">
            <span className="font-bold">CARESS FLOW</span>,
            <span className="font-bold"> 2 DOĞAL ELEMENTİN (Moleküler Oksijen ve Hyaluronik Asit) SİNERJİSİNE</span> dayanan
            bir doktor ekibinin dört yıllık ortak araştırmasının sonucu ortaya çıkan bilimsel bir keşiftir.
          </p>
        </div>


        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full md:w-10/12 lg:w-8/12">
            {patientFeedbacks.map((fb) => (
              <FeedbackCard key={fb.id} feedback={fb} />
            ))}
          </div>
        </div>
      </div>
    </MainComponent>
  )
}