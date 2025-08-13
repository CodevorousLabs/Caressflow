interface ComponentProps {
  children: React.ReactNode
}
export default function SectionDescription({ children }: ComponentProps) {
  return (
    <p
      className="
        text-[#888989] 
        text-2xl sm:text-3xl md:text-4xl lg:text-[58px] 
        mb-[20px] 
        font-bold font-heebo 
        text-center
      "
    >
      {children}
    </p>
  )
}