import { ReactNode } from "react"

interface ComponentProps {
  children: ReactNode
}

export default function AnimatedButton({ children }: ComponentProps) {
  return (
    <button
      className="
          relative inline-block px-4 md:px-6 py-3 md:py-5 
          font-rubik text-sm md:text-base lg:text-lg text-white 
          rounded-md bg-[#00C1CF] cursor-pointer overflow-hidden
          transition-transform duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]
          hover:scale-110 hover:shadow-lg

          before:content-[''] before:absolute before:inset-0 before:rounded-md
          before:bg-[#e83185] before:scale-0 before:opacity-100
          before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.02,0.01,0.47,1)]
          hover:before:scale-100
        "
    >
      <span className="relative z-10 drop-shadow-md block text-center">
        {children}
      </span>
    </button>
  )
}