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

export default function DoctorFeedbacksPage() {
  return (
    <MainComponent>
      <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative">
        <div className="flex flex-col justify-center items-center space-y-5 z-10">
          <SectionDescription>Doktor Yorumları</SectionDescription>
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