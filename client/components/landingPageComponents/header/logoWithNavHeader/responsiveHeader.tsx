'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/caressFlowLogo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function ResponsiveHeader() {
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
        className="min-[800px]:hidden flex justify-between items-center p-[30px] text-pink-bg px-16 font-rubik bg-white z-50 w-full"
      >
        <div className="mr-60 max-[1100px]:mr-0">
          <Link href={'/'}>
            <Image src={logo} alt="CaressFlowLogo" className="max-[500px]:w-24 h-auto" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger><RxHamburgerMenu className="text-2xl" /></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Logo</SheetTitle>
              <SheetDescription>
                NavBar
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </motion.div>

      {/* FIXED HEADER COMES IN AFTER SCROLL RATE IS GREATER THAN 300 */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        style={{
          y: isFixed ? '0%' : '-300%',
        }}
        className="min-[800px]:hidden flex justify-between items-center p-[30px] text-pink-bg px-16 font-rubik bg-white z-50 w-full fixed duration-500"
      >
        <div className="mr-60 max-[1100px]:mr-0">
          <Link href={'/'}>
            <Image src={logo} alt="CaressFlowLogo" className="max-[500px]:w-24 h-auto" />
          </Link>
        </div>

        <RxHamburgerMenu className="text-2xl" />
      </motion.div>
    </>
  );
}
