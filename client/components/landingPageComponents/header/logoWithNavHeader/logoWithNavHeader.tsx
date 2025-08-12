'use client'
import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/caressFlowLogo.png";
import Link from "next/link";

export default function LogoWithNavHeader() {
  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState<boolean>(false)
  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    if (scrollValue > 200) setIsFixed(true)
    if (scrollValue < 200) setIsFixed(false)
  })

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const yOffset = useTransform(scrollY, [0, 300], [-100, 0]);


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        className="flex justify-start items-center p-[30px] text-pink-bg px-16 font-rubik bg-white z-50 w-full"
      >
        <div className="mr-60">
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
      </motion.div>

      {/* FIXED HEADER COMES IN AFTER SCROLL RATE IS GREATER THAN 300 */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        style={{
          y: isFixed ? '0%' :'-300%',
        }}
        className="flex justify-start items-center p-[30px] text-pink-bg px-16 font-rubik bg-white z-50 w-full fixed duration-500"
      >
        <div className="mr-60">
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
      </motion.div>
    </>
  );
}
