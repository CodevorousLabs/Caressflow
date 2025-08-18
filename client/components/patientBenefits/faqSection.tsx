import SectionTitle from "../landingPageComponents/sectionTitle"
import SectionDescription from "../landingPageComponents/sectionDescription"
export default function FaqSection() {
  return (
    <div className="w-7/12 mx-auto flex flex-col justify-start items-start py-[100px] gap-14">
      <div className="flex flex-col w-full justify-start items-start">
        <SectionTitle>SİZDEN GELEN</SectionTitle>
        <SectionDescription>SIKÇA SORULAN SORULAR</SectionDescription>
      </div>

    </div>
  )
}