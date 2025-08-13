'use client'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/caressFlowLogo.png";
import Link from "next/link";

export default function LogoWithNavHeader() {
  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState<boolean>(false)
  useMotionValueEvent(scrollY, "change", (scrollValue) => { // Tracks and checks the scroll value if its greater than 300 or not.
    if (scrollValue > 200) setIsFixed(true)
    if (scrollValue < 200) setIsFixed(false)
  })

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        className="flex justify-start items-center p-[30px] text-pink-bg px-16 font-rubik bg-white z-50 w-full
        max-[1100px]:flex-col max-[1100px]:items-center max-[1100px]:gap-5
        max-[800px]:hidden
        "
      >
        <div className="mr-60 max-[1100px]:mr-0">
          <Link href={'/'}>
            <Image src={logo} alt="CaressFlowLogo" />
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-5 font-heebo text-sm">
          <Link href={'/terapi'}>TEDAVİ</Link>
          <Menubar className="shadow-none border-none">
            <MenubarMenu>
              <MenubarTrigger>AVANTAJLAR</MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <Link href="/hasta">HASTA İÇİN AVANTAJLAR</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link href="/doktor">DOKTORLAR İÇİN AVANTAJLAR</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link href={'/yayın'}>YAYINLAR VE HABERLER</Link>
          <Link href={'/neredeyiz'}>NEREDEYİZ</Link>
          <Menubar className="shadow-none border-none">
            <MenubarMenu>
              <MenubarTrigger><Link href={'/#'}>REFERANS & GÖRÜŞLER</Link></MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="text-gray-text font-heebo hover:text-pink-bg duration-150"><Link href={'/#'}>KULLANICILAR</Link></MenubarItem>
                <MenubarItem className="text-gray-text font-heebo hover:text-pink-bg duration-150"><Link href={'/#'}>DOKTORLAR</Link></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Link href={'/iletisim'}>BİZE ULAŞIN</Link>
        </div>
      </motion.div>

      {/* FIXED HEADER COMES IN AFTER SCROLL RATE IS GREATER THAN 300 */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        style={{
          y: isFixed ? '0%' : '-300%',
        }}
        className="flex justify-start items-center p-[30px] text-pink-bg px-16 font-rubik bg-white z-50 w-full fixed duration-500
        max-[1100px]:flex-col max-[1100px]:items-center max-[1100px]:gap-5 max-[800px]:hidden
        "
      >
        <div className="mr-60 max-[1100px]:mr-0">
          <Link href={'/'}>
            <Image src={logo} alt="CaressFlowLogo" />
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-5 font-heebo text-sm">
          <Link href={'/terapi'}>TEDAVİ</Link>
          <Menubar className="shadow-none border-none">
            <MenubarMenu>
              <MenubarTrigger>AVANTAJLAR</MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="text-gray-text font-heebo">
                  <Link href="/hasta">HASTA İÇİN AVANTAJLAR</Link>
                </MenubarItem>
                <MenubarItem className="text-gray-text font-heebo">
                  <Link href="/doktor">DOKTORLAR İÇİN AVANTAJLAR</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link href={'/yayın'}>YAYINLAR VE HABERLER</Link>
          <Link href={'/neredeyiz'}>NEREDEYİZ</Link>
          <Menubar className="shadow-none border-none">
            <MenubarMenu>
              <MenubarTrigger>REFERANS & GÖRÜŞLER</MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="text-gray-text font-heebo hover:text-pink-bg duration-150"><Link href={'/#'}>KULLANICILAR</Link></MenubarItem>
                <MenubarItem className="text-gray-text font-heebo hover:text-pink-bg duration-150"><Link href={'/#'}>DOKTORLAR</Link></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Link href={'/iletisim'}>BİZE ULAŞIN</Link>
        </div>
      </motion.div>
    </>
  );
}
