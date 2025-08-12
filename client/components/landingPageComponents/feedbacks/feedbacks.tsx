import bg from '@/assets/backgroundTexture.jpg'
import SectionTitle from "../sectionTitle"
import SectionDescription from "../sectionDescription"
import FeedbackCard from './feedbackCard'
const staticData = [
  {
    name: "Nursel G..",
    feedback: "İlk seanstan itibaren daha az ağrım ve yanmam bayağı azaldı, tam iyileşme için tedaviyi tamamladım. En güzel tarafı ise ilaç kullanmamış olmam ve kendimi tamamen iyi hissetmenin keyfi oldu!"
  },
  {
    name: "Hatice K..",
    feedback: "Çok memnun kaldım, ilk seanstan itibaren fayda gördüm. Ayrıca çift olarak yaşamda da yeniden kendimi keşfettim. Bu tedaviyi tüm arkadaşlarıma tavsiye ediyor, Denemelerini öneriyorum."
  },
  {
    name: "Emine R..",
    feedback: "5 tedavi seansı yaptırdım ve etkinisini ilk seanstan itibaren fark ettim. Daha iyi nemlendirme ve rahatlama sağladı. Sahip olduğum sorunları çözdü. Kesinlikle tavsiye ederim +++"
  },
  {
    name: "Şerife S..",
    feedback: "Doğumdan sonra sürekli rahatsızlık hissediyordum ve bu tedaviyi denedim. Hiç acı yok, ferahlık hissiyatı çok hoş. 3 tedavi seansı aldım ve çok daha iyiyim. Teşekkürler!"
  },
  {
    name: "Canan",
    feedback: "Bu tedaviye uzun süredir yaşadığım üriner inkontinans sorunu için başvurdum. Tedavi sürecinde hissettiğim rahatlama beni çok mutlu etti. Yaşam kalitem arttı. Bu deneyimden sonra, arkadaşlarımda bu tedaviyi denemeyi düşünüyor."
  },
  {
    name: "Songül K..",
    feedback: "Bu tedavi sayesinde uzun süredir devam eden rahatsızlığı çözdüm. Neredeyse alışmıştım... İlk tedavi seansı ile neredeyse tamamen iyilişti. Yaptırmaya devam ediceğim."
  }
]

export default function Feedbacks() {
  return (
    <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative" style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center', }}>
      <div className="flex flex-col justify-center items-center space-y-5 z-10">
        <SectionTitle>CARESS FLOW tedavisinden sonra</SectionTitle>
        <SectionDescription>Memnun Kalan Hastalar</SectionDescription>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {staticData.map((fb) => (
          <FeedbackCard key={fb.name} feedback={fb} />
        ))}
      </div>
    </div>
  )
}