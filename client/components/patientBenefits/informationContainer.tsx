interface ComponentProps {
  title: string,
  description: string,
  buttonText: string
}

export default function informationContainer({ title, description, buttonText }: ComponentProps) {
  return (
    <div className="
      w-full sm:w-10/12 lg:w-8/12 
      flex flex-col 
      bg-pink-bg font-rubik 
      items-center justify-center text-center 
      min-h-[200px] 
      py-10 sm:py-12 lg:py-16
      space-y-6
    ">
      <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
        {title}
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl">
        {description}
      </p>
      <button className="
        relative inline-block px-4 sm:px-6 py-2 sm:py-3 font-rubik text-white 
        rounded-md bg-[#00C1CF] cursor-pointer overflow-hidden
        transition-transform duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]
        hover:scale-110 hover:shadow-lg
        before:content-[''] before:absolute before:inset-0 before:rounded-md
        before:bg-[#e83185] before:scale-0 before:opacity-100
        before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.02,0.01,0.47,1)]
        hover:before:scale-100
      ">
        <span className="relative z-10 drop-shadow-md">
          {buttonText}
        </span>
      </button>
    </div>
  )
}
