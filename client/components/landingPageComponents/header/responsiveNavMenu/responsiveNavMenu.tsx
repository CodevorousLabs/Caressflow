import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function ResponsiveNavMenu() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>AVANTAJLAR</AccordionTrigger>
        <AccordionContent>
          <Link href={'/hastalar'}>HASTA İÇİN AVANTAJLAR</Link>
          <Link href={'/doktorlar'}>DOKTORLAR İÇİN AVANTAJLAR</Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}