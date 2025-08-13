interface ComponentProps {
  children: React.ReactNode
}
export default function SectionTitle({ children }: ComponentProps) {
  return (
    <p className="text-pink-bg 
        text-lg sm:text-xl md:text-2xl lg:text-[28px] 
        mb-[10px] 
        font-rubik 
        font-semibold
        text-center"
    >
      {children}
    </p>
  )
}