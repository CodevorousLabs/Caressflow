'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/caressFlowLogo.png";
import Link from "next/link";

export default function LogoWithNavHeader() {
  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<string>("")
  useMotionValueEvent(scrollY, "change", (scrollValue) => { // Tracks and checks the scroll value if its greater than 300 or not.
    if (scrollValue > 200) setIsFixed(true)
    if (scrollValue < 200) setIsFixed(false)
  })
  console.log(openMenu)
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

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-pink-bg hover:text-pink-bg">AVANTAJLAR</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/hasta" className="text-gray-text hover:text-pink-bg">HASTA İÇİN AVANTAJLAR</NavigationMenuLink>
                  <NavigationMenuLink href="/doktor" className="text-gray-text hover:text-pink-bg">DOKTORLAR İÇİN AVANTAJLAR</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href={'/yayın'}>YAYINLAR VE HABERLER</Link>
          <Link href={'/neredeyiz'}>NEREDEYİZ</Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-pink-bg hover:text-pink-bg">REFERANS & GÖRÜŞLER</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/#" className="text-gray-text hover:text-pink-bg">KULLANICILAR</NavigationMenuLink>
                  <NavigationMenuLink href="/#" className="text-gray-text hover:text-pink-bg">DOKTORLAR</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-pink-bg hover:text-pink-bg">AVANTAJLAR</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/hasta" className="text-gray-text hover:text-pink-bg">HASTA İÇİN AVANTAJLAR</NavigationMenuLink>
                  <NavigationMenuLink href="/doktor" className="text-gray-text hover:text-pink-bg">DOKTORLAR İÇİN AVANTAJLAR</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href={'/yayın'}>YAYINLAR VE HABERLER</Link>
          <Link href={'/neredeyiz'}>NEREDEYİZ</Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-pink-bg hover:text-pink-bg">REFERANS & GÖRÜŞLER</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/#" className="text-gray-text hover:text-pink-bg">KULLANICILAR</NavigationMenuLink>
                  <NavigationMenuLink href="/#" className="text-gray-text hover:text-pink-bg">DOKTORLAR</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href={'/iletisim'}>BİZE ULAŞIN</Link>
        </div>
      </motion.div>
    </>
  );
}
