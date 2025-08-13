'use client'
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function GoUpButton() {

  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (scrollValue) => { // Tracks and checks the scroll value if its greater than 300 or not.
    if (scrollValue > 200) setIsFixed(true)
    if (scrollValue < 200) setIsFixed(false)
  })


  return (
    <motion.a href="#top" className="p-5 bg-pink-bg fixed bottom-5 right-5 z-50 duration-150" style={{
      opacity: isFixed ? '100' : '0',
    }}>
      <FaArrowUp className="text-white font-bold" />
    </motion.a>
  )
}