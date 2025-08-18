'use client'
import { motion } from "framer-motion";

interface ComponentProps {
  title: string,
  description: string,
  buttonText: string
}

export default function TryForFree({ title, description, buttonText }: ComponentProps) {
  return (
    <div className="w-8/12 flex flex-col bg-pink-bg font-rubik items-center justify-start text-center min-h-[200px] py-15 space-y-6 ">
      <p className="text-white text-[40px]">{title}</p>
      <p className="text-2xl">{description}</p>
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
          {buttonText}
        </span>
      </motion.button>
    </div>
  )
}