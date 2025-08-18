interface ComponentProps {
  children: React.ReactNode
}
export default function SectionTitle({ children }: ComponentProps) {
  return (
    <p className="text-pink-bg 
        mb-[10px] 
        font-rubik 
        text-center"
    >
      {children}
    </p>
  )
}