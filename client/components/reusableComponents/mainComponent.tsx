import bg from "@/public/assets/backgroundTexture.jpg"
import { ReactNode } from "react"

interface ComponentProps {
  children: ReactNode
}

export default function MainComponent({ children }: ComponentProps) {
  return (
    <main className="relative" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "cover",
      backgroundPosition: 'center'
    }}>
      {children}
    </main>
  )
}