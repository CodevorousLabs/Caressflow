import MainComponent from "@/components/reusableComponents/mainComponent"
import avatar1 from "@/public/assets/userAvatars/userAvatar1.jpg"
import avatar2 from "@/public/assets/userAvatars/userAvatar2.jpg"
import avatar3 from "@/public/assets/userAvatars/userAvatar3.jpg"
import FeedbackCard from "@/components/reusableComponents/feedbackCard"
import SectionDescription from "@/components/reusableComponents/sectionDescription"
const staticData = [
  {
    name: "Teresa",
    comment: "Bu yeni çözümü daha önce denemiş bir arkadaşımdan öğrendim. İlk seanstan itibaren çok etkilendim. Tamamen doğal ve risksiz olmasını çok seviyorum. Kesinlikle tavsiye ederim!",
    imageURL: avatar1
  },
  {
    name: "Anna",
    comment: "Bu tedavi sayesinde uzun zamandır uğraştığım bir sorunu çözdüm. Neredeyse alışmıştım... tek bir tedavi döngüsünde neredeyse tamamen ortadan kalktı. Gelecekte daha fazlasını yapacağım.",
    imageURL: avatar2
  },
  {
    name: "Linda",
    comment: "Doğum yaptıktan sonra sürekli rahatsızlık hissediyordum, bu yüzden bu tedaviyi denedim. Hiçbir ağrım yoktu, sadece hoş ve ferahlatıcı bir histi. Üç seanslık bir tedavi süreci geçirdim ve kendimi çok daha iyi hissediyorum. Teşekkürler!",
    imageURL: avatar3
  },
  {
    name: "Teresa",
    comment: "Bu yeni çözümü daha önce denemiş bir arkadaşımdan öğrendim. İlk seanstan itibaren çok etkilendim. Tamamen doğal ve risksiz olmasını çok seviyorum. Kesinlikle tavsiye ederim!",
    imageURL: avatar1
  },
  {
    name: "Anna",
    comment: "Bu tedavi sayesinde uzun zamandır uğraştığım bir sorunu çözdüm. Neredeyse alışmıştım... tek bir tedavi döngüsünde neredeyse tamamen ortadan kalktı. Gelecekte daha fazlasını yapacağım.",
    imageURL: avatar2
  },
  {
    name: "Linda",
    comment: "Doğum yaptıktan sonra sürekli rahatsızlık hissediyordum, bu yüzden bu tedaviyi denedim. Hiçbir ağrım yoktu, sadece hoş ve ferahlatıcı bir histi. Üç seanslık bir tedavi süreci geçirdim ve kendimi çok daha iyi hissediyorum. Teşekkürler!",
    imageURL: avatar3
  }
]

export default function PatientFeedbacksPage() {
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


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {staticData.map((fb, i) => (
            <FeedbackCard key={i} feedback={fb} />
          ))}
        </div>
      </div>
    </MainComponent>
  )
}