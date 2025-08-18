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
      <button
        className="
    relative inline-block px-6 py-3 font-rubik text-white 
    rounded-md bg-[#00C1CF] cursor-pointer overflow-hidden
    transition-transform duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]
    hover:scale-110 hover:shadow-lg

    before:content-[''] before:absolute before:inset-0 before:rounded-md
    before:bg-[#e83185] before:scale-0 before:opacity-100
    before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.02,0.01,0.47,1)]
    hover:before:scale-100
  "
      >
        <span className="relative z-10 drop-shadow-md">
          {buttonText}
        </span>
      </button>
    </div>
  )
}