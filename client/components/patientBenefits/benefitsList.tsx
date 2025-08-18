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

      <motion.button
        className="relative overflow-hidden bg-gradient-to-r from-[#00D0DF] to-[#00BBC9] 
                 text-white font-semibold tracking-wide uppercase rounded-lg 
                 px-10 py-5 shadow-lg hover:shadow-pink-400/50 transition-shadow duration-300"
      >
        <motion.span
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 bg-pink-500 origin-center rounded-lg"
        />

        <span className="relative z-10 drop-shadow-md">
          ITALYADAKI CARESS FLOW ÇALIŞMALARINI KEŞFEDİN
        </span>
      </motion.button>
    </div>
  )
}