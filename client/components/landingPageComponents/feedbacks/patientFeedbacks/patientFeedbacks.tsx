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
      <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative space-y-16">
        <div className="flex flex-col justify-center items-center space-y-5 z-10">
          <SectionDescription>Hasta Yorumları</SectionDescription>
        </div>

        <div className="flex flex-col items-start justify-start space-y-12 w-8/12">
          <p className="font-heebo text-2xl font-bold">6 PATOLOJİNİN tedavisine yönelik yeni BASİT ve DOĞAL yaklaşımı keşfedin</p>
          <p className="font-rubik text-gray-text"><span className="font-bold">CARESS FLOW</span>, <span className="font-bold">2 DOĞAL ELEMENTİN (Moleküler Oksijen ve Hyaluronik Asit) SİNERJİSİNE</span> dayanan bir doktor ekibinin dört yıllık ortak araştırmasının sonucu ortaya çıkan bilimsel bir keşiftir.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {staticData.map((fb, i) => (
            <FeedbackCard key={i} feedback={fb} />
          ))}
        </div>
      </div>
    </MainComponent>
  )
}