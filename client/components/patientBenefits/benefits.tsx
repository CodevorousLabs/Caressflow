import SectionTitle from "../reusableComponents/sectionTitle"
import SectionDescription from "../reusableComponents/sectionDescription"
import BenefitsList from "./benefitsList"

export default function Benefits() {
  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
      <div className="flex flex-col justify-start items-start text-left">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Hastalar İçin Avantajlar</SectionDescription>
      </div>

      <BenefitsList />

      <div className="flex flex-col justify-start items-start text-left">
        <SectionDescription>Hakkımızda</SectionDescription>
        <p className="text-sm md:text-base lg:text-lg">
          CARESS FLOW tedavisinden sonra hakkımızda söylenenler
        </p>
      </div>
    </div>
  )
}
