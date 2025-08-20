import MainComponent from "@/components/reusableComponents/mainComponent"
import SectionDescription from "@/components/reusableComponents/sectionDescription"
import InformationContainer from "@/components/reusableComponents/informationContainer"

const staticData = [
  {
    title: "Prof. Cagnacci'nin Web Semineri: Meme Kanseri Nedeniyle İatrojenik Menopozda Olan Kadınlar İçin Okşama Akışı",
    description: "21 Eylül 2021'de Profesör Cagnacci ve Dr. Massarotti tarafından meme kanseri nedeniyle menopoza giren genç kadınlarda Caress Flow tedavisinin etkinliği hakkında sunulan web semineri."
  },
  {
    title: "Prof. Cagnacci. Vajinal Çevre İçin Yeni Terapötik Yaklaşımlar – 20. A.G.E.O. Ulusal Kongresi",
    description: "Profesör Cagnacci, 31 Mart - 2 Nisan 2022 tarihleri arasında Padova'da düzenlenen 20. Ulusal A.G.E.O. Kongresi'nde meme kanseri nedeniyle menopoza giren genç kadınlarda Caress Flow tedavisinin etkinliğini anlatıyor."
  },
  {
    title: "Prof. Murina'nın Web Semineri: Vulvovajinal Atrofi ve GSM",
    description: "Yazı düzenlendi."
  },
  {
    title: "Dr. Tirelli'nin Web Semineri: Okşama Akışı: Klinik Deneyim",
    description: "Dr. Tirelli, Caress Flow ile ilgili deneyimlerini paylaşıyor."
  },

]


export default function DoctorFeedbacksPage() {
  return (
    <MainComponent>
      <div className="flex flex-col w-full justify-center items-center px-15 py-30 relative space-y-16">
        <div className="flex flex-col justify-center items-center space-y-5 z-10">
          <SectionDescription>Doktor & Profesyonel Yorumları</SectionDescription>
        </div>

        <InformationContainer title="CARESS FLOW'U ÜCRETSİZ DENEYİN" description="STÜDYONUZDA 1 AY ÜCRETSİZ" buttonText="DAHA FAZLA BİLGİ EDİNİN" />

        <div className="flex flex-col justify-center items-center space-y-5 z-10">
          <SectionDescription>Caress Flow Web Seminerleri</SectionDescription>
        </div>

        <div className="flex flex-col justify-start items-start space-y-10 w-full sm:w-10/12 lg:w-8/12">
          {staticData.map((stat: { title: string, description: string }, i: number) =>
            <div className="space-y-5" key={i}>
              <p className="font-heebo text-4xl text-gray-text font-semibold">{stat.title}</p>
              <p className="font-rubik text-lg">{stat.description}</p>
            </div>
          )}
        </div>

      </div>
    </MainComponent>
  )
}