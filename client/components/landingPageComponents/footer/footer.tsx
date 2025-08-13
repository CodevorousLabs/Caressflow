import Link from "next/link"
export default function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <p className="text-[#686A6F] font-rubik text-center sm:text-left">
        Caress Flow Tr 2024 © | Tüm Hakları Saklıdır
      </p>
      <Link
        href="https://www.bdsahealth.com/tr"
        className="text-[#686A6F] font-rubik hover:text-[#00ACB1] duration-150 text-center sm:text-right"
      >
        BDSA Sağlık Yatırımları A.Ş. ©
      </Link>
    </footer>
  )
}
