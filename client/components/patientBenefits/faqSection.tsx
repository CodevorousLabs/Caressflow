import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const staticData = [
  {
    question: "CARESS FLOW protokolünün endikasyonları nelerdir?",
    answer: "CARESS FLOW protokolü vulvovajinal atrofi (VVA) semptomlarının tedavisinde endikedir.",
  },
  {
    question: "Tedavi nasıldır, hormon tedavisine mi dayanmaktadır?",
    answer: "CARESS FLOW tedavisi, tek kullanımlık bir kanül aracılığıyla vajinal kanala ilk on dakika boyunca yüksek konsantrasyonlu oksijen ve son beş dakika boyunca düşük molekül ağırlıklı hyaluronik asit verilmesini içerir. Hormon kullanımı içermeyen doğal bir tedavidir.",
  },
  {
    question: "Sancılı mı?",
    answer: `Terapi, oksijen "nefesi" gibi serin, hoş ve ağrısızdır.`,
  },
  {
    question: "Güvenli bir tedavi midir? Tekrarlanabilir mi?",
    answer: "Tedavi, mukozada lezyon, kızarıklık veya rahatsızlığa neden olmaz ve herhangi bir kontrendikasyonu yoktur. Tamamen güvenlidir, bu nedenle kürler hasta için herhangi bir risk oluşturmadan defalarca tekrarlanabilir.",
  },
  {
    question: "Terapötik protokol kaç uygulamadan oluşuyor ve tek bir seans ne kadar sürüyor?",
    answer: "Protokolün tamamı 14 günlük aralıklarla 5 uygulamadan oluşur. Tek bir seans 15 dakika sürer.",
  },
  {
    question: "Bunun mutlaka gündüz hastanesinde mi yapılması gerekiyor?",
    answer: "Kesinlikle hayır, terapi non-invazivdir.",
  },
  {
    question: "Seans sonrası hastanın dikkat etmesi gereken hususlar nelerdir?",
    answer: "Hiçbir önlem almaya gerek yoktur; tedavi sonunda mukoza tamamen sağlam kalır ve bu nedenle özel bir bakıma gerek yoktur.",
  },
  {
    question: "Terapiden ne kadar süre sonra hasta tekrar cinsel olarak aktif olabilir?",
    answer: "Mukoza üzerinde lezyonların tamamen yokluğu nedeniyle tedavi sonunda cinsel aktiviteye ara verilmesine gerek kalmaz.",
  },
  {
    question: "Kaç seanstan sonra ilk faydaları görmeye başlıyorsunuz?",
    answer: "Tedavinin faydaları ilk seanstan itibaren görülmeye başlanır.",
  },
  {
    question: "Her yaşta yapılabilir mi?",
    answer: "Evet, her yaşta terapiye başvurabilirsiniz.",
  },
  {
    question: "Geçmişte veya devam eden jinekolojik rahatsızlıklarda terapi uygulanabilir mi?",
    answer: "Mevcut rahatsızlıklar söz konusu olduğunda, negatif Pap testi ile tedavi yapılabilir. Mevcut rahatsızlıklar için ise jinekolog, hastanın tedaviye uygun olup olmadığını belirleyecektir.",
  },
  {
    question: "Pahalı bir terapi mi?",
    answer: "Piyasadaki en ucuzudur.",
  },
  {
    question: "Alternatif tedavilere (lazer veya hormon tedavileri) göre avantajları nelerdir?",
    answer: "CARESS FLOW, sağlıklı dokularda normalde bulunan elementler olan oksijen ve hyaluronik asit temelli doğal bir tedavidir. İnvaziv olmayan bir işlemdir ve doku ablasyonu veya hormonal dengeyi bozan ilaçların uygulanmasını içermez.",
  },

]

import SectionTitle from "../landingPageComponents/sectionTitle"
import SectionDescription from "../landingPageComponents/sectionDescription"
export default function FaqSection() {
  return (
    <div className="w-7/12 mx-auto flex flex-col justify-start items-start py-[100px] gap-14">
      <div className="flex flex-col w-full justify-start items-start">
        <SectionTitle>SİZDEN GELEN</SectionTitle>
        <SectionDescription>SIKÇA SORULAN SORULAR</SectionDescription>
      </div>

      <div className="w-full flex">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {staticData.map((question: { question: string, answer: string }, i: number) =>
            <AccordionItem key={question.question} value={`item-${i}`}>
              <AccordionTrigger className="text-lg text-[#BE0D74] font-heebo font-semibold hover:cursor-pointer">{question.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="font-rubik text-[#273F84] text-lg">
                  {question.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>

    </div>
  )
}