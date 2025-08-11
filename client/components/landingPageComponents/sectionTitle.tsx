interface ComponentProps {
  children: React.ReactNode
}
export default function SectionTitle({children}: ComponentProps){
  return (
    <p className="text-[15px] text-pink-bg mb-[10px] font-rubik">{children}</p>
  )
}