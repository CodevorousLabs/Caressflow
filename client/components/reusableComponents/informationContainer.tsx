import AnimatedButton from "./animatedButton"

interface ComponentProps {
  title: string,
  description: string,
  buttonText: string
}

export default function InformationContainer({ title, description, buttonText }: ComponentProps) {
  return (
    <div className="
      w-full sm:w-10/12 lg:w-8/12 
      flex flex-col 
      bg-pink-bg font-rubik 
      items-center justify-center text-center 
      min-h-[200px] 
      py-10 sm:py-12 lg:py-16
      space-y-6
      mb-10
    ">
      <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
        {title}
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl">
        {description}
      </p>
      <AnimatedButton>
        {buttonText}
      </AnimatedButton>
    </div>
  )
}
