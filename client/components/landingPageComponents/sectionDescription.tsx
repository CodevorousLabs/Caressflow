interface ComponentProps {
  children: React.ReactNode
}
export default function SectionDescription({children}: ComponentProps){
  return (
    <p className="text-[#888989] text-[58px] mb-[20px] font-bold font-heebo">{children}</p>
  )
}