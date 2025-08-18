import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function ResponsiveNavMenu() {
  return (
    <div className="flex flex-col w-full justify-start items-start font-rubik space-y-5">
      <Link href={'/terapi'} className="text-gray-text font-[500] px-2">TEDAVI</Link>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-text text-base font-[500] px-2">AVANTAJLAR</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-5 justify-center bg-[#f8f8f8] py-3 px-2">
              <Link href={'/hastalar-icin-avantajlar'} className="text-gray-text font-medium">HASTA İÇİN AVANTAJLAR</Link>
              <Link href={'/doktorlar'} className="text-gray-text font-medium">DOKTORLAR İÇİN AVANTAJLAR</Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link href={'/yayın'} className="text-gray-text font-[500] px-2">YAYINLAR VE HABERLER</Link>
      <Link href={'/neredeyiz'} className="text-gray-text font-[500] px-2">NEREDEYİZ</Link>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-text text-base font-[500] px-2">REFERANS & GÖRÜŞLER</AccordionTrigger>
          <AccordionContent className="flex flex-col space-y-5 justify-center bg-[#f8f8f8] py-3 px-2">
            <Link href={'/#'} className="text-gray-text font-[500] px-2">KULLANICILAR</Link>
            <Link href={'/#'} className="text-gray-text font-[500] px-2">DOKTORLAR</Link>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      <Link href={'/iletisim'} className="text-gray-text font-[500] px-2">BİZE ULAŞIN</Link>
    </div>
  )
}