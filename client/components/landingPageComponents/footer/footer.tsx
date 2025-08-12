import Link from "next/link"
export default function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto flex justify-between items-center py-10">
      <p className="text-[#686A6F] font-rubik">Caress Flow Tr 2024 © | Tüm Hakları Saklıdır</p>
      <Link href={'https://www.bdsahealth.com/tr'} className="text-[#686A6F] font-rubik hover:text-[#00ACB1] duration-100">BDSA Sağlık Yatırımları A.Ş. ©</Link>
    </footer>
  )
}