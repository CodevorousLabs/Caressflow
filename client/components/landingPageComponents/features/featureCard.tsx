import { FeatureType } from "@/Types/GlobalTypes"
import { IconType } from "react-icons"; 

interface ComponentProps {
  feat: FeatureType,
  Icon: IconType
}

export default function FeatureCard({ feat, Icon }: ComponentProps) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-white shadow-sm rounded-lg 
      w-full sm:w-[45%] lg:w-[28%] min-h-[300px] transition-all duration-300 
      hover:shadow-md">

      <div className="flex flex-col justify-start items-start">
        <div className="w-[70px] h-[70px] bg-[#F8F8F8] flex items-center justify-center text-5xl text-pink-bg rounded-md">
          <Icon />
        </div>
        <p className="text-[20px] text-[#555] font-heebo mt-6 font-semibold">
          {feat.title}
        </p>
      </div>

      {feat.description ? (
        <p className="text-base font-rubik text-[#686A6F] leading-7">
          {feat.description}
        </p>
      ) : (
        <ul className="list-disc list-inside text-[#686A6F] font-rubik">
          {feat.specs?.map((spec: string) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      )}
    </div>
  )
}