'use client'
import { motion } from "framer-motion";

const benefitsData = [
  {
    bold: "Güvenli",
    text: "hiçbir kontrendikasyonu veya yan etkisi yoktur"
  },
  {
    bold: "Etkili",
    text: "ilk tedaviden itibaren fark edilebilir sonuçlar"
  },
  {
    bold: "Ağrısız",
    text: "tedavi keyifli ve invaziv değildir"
  },
  {
    bold: "İYİLEŞME SÜRESİ GEREKMİYOR",
    text: "alışkanlıklarınıza hemen geri dönebilirsiniz"
  }
]

interface BenefitType {
  bold: string,
  text: string
}

export default function BenefitsList() {
  return (
    <div className="flex flex-col items-start justify-start space-y-12">
      <p className="font-rubik text-[32px]">Doğal, oksijen bazlı, invaziv olmayan, keyifli ve risksiz bir tedavi.</p>
      <ul className="space-y-5 list-disc">
        {benefitsData.map((benefit: BenefitType) =>
          <li key={benefit.text} className="text-2xl text-gray-text">
            <span className="font-rubik text-2xl text-black">{benefit.bold}</span> {benefit.text}
          </li>
        )}
      </ul>

      <button
        className="
    relative inline-block px-6 py-6 font-rubik text-white 
    rounded-md bg-[#00C1CF] cursor-pointer overflow-hidden
    transition-transform duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]
    hover:scale-110 hover:shadow-lg

    before:content-[''] before:absolute before:inset-0 before:rounded-md
    before:bg-[#e83185] before:scale-0 before:opacity-100
    before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.02,0.01,0.47,1)]
    hover:before:scale-100
  "
      >
        <span className="relative z-10 drop-shadow-md">
          ITALYADAKI CARESS FLOW ÇALIŞMALARINI KEŞFEDİN

        </span>
      </button>

    </div>
  )
}