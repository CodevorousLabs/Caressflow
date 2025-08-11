import Image from "next/image"
import logo from "@/assets/caressFlowLogo.png"
import Link from "next/link"
export default function LogoWithNavHeader() {
  return (
    <div className="flex justify-start items-center py-[30px] text-pink-bg px-16 font-rubik">
      <div className=" mr-60">
        <Link href={'/'}>
          <Image src={logo} alt="CaressFlowLogo" />
        </Link>
      </div>

      <div className="flex justify-center items-center space-x-5 font-heebo text-sm">
        <Link href={'/terapi'}>TEDAVİ</Link>
        <Link href={'/#'}>AVANTAJLAR</Link>
        <Link href={'/yayın'}>YAYINLAR VE HABERLER</Link>
        <Link href={'/neredeyiz'}>NEREDEYİZ</Link>
        <Link href={'/#'}>REFERANS & GÖRÜŞLER</Link>
        <Link href={'/iletisim'}>BİZE ULAŞIN</Link>
      </div>
    </div>
  )
}