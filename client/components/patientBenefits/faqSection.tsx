import SectionTitle from "../reusableComponents/sectionTitle"
import SectionDescription from "../reusableComponents/sectionDescription"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import readFaq from "@/lib/readFaq"

interface Question {
  id: number,
  user_created: string,
  date_created: string,
  user_updated: string,
  date_updated: string,
  q: string,
  a: string
}

export default async function FaqSection() {

  const faq = await readFaq()

  return (
    <div className="w-full flex justify-center py-20 sm:py-24 lg:py-32">
      <div className="w-full sm:w-11/12 lg:w-7/12 flex flex-col gap-14">
        <div className="flex flex-col w-full justify-start items-start text-start gap-2">
          <SectionTitle>
            SİZDEN GELEN
          </SectionTitle>
          <SectionDescription>
            SIKÇA SORULAN SORULAR
          </SectionDescription>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faq.map((question: Question, i: number) => (
            <AccordionItem key={question.id} value={`item-${i}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl text-[#BE0D74] font-heebo font-semibold hover:cursor-pointer">
                {question.q}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p className="font-rubik text-[#273F84] text-base sm:text-lg lg:text-xl">
                  {question.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
