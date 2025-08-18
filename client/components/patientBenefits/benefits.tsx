import SectionTitle from "../landingPageComponents/sectionTitle"
import SectionDescription from "../landingPageComponents/sectionDescription"
import BenefitsList from "./benefitsList"
export default function Benefits() {
  return (
    <div className="w-7/12 mx-auto flex flex-col justify-start items-start py-[100px] gap-14">
      <div className="flex flex-col justify-start items-start">
        <SectionTitle>CARESS FLOW</SectionTitle>
        <SectionDescription>Hastalar İçin Avantajlar</SectionDescription>
      </div>
      <BenefitsList />
      <div className="flex flex-col justify-start items-start">
        <SectionDescription>Hakkımızda</SectionDescription>
        <p>CARESS FLOW tedavisinden sonra hakkımızda söylenenler</p>
      </div>
    </div>
  )
}