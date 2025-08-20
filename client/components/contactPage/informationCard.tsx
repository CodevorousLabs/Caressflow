interface ComponentProps {
  icon: React.ReactNode
  title: string
  text: string
}

export default function InformationCard({ icon, title, text }: ComponentProps) {
  return (
    <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 w-full">
      <div className="flex items-center justify-center min-w-[3.5rem] min-h-[3.5rem] md:w-14 md:h-14 rounded-lg bg-pink-bg">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-gray-800 text-base md:text-lg">{title}</p>
        <p className="text-sm md:text-base text-gray-600">{text}</p>
      </div>
    </div>
  )
}
