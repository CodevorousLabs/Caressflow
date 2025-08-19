import MainComponent from "@/components/reusableComponents/mainComponent"
import SectionTitle from "@/components/reusableComponents/sectionTitle"
import SectionDescription from "@/components/reusableComponents/sectionDescription"
import ImageComponent from "@/components/reusableComponents/imageComponent"
import discoveryPic from "@/public/assets/discoveryPage/discoveryPic.jpg"

export default function ScientificDiscoveryPage() {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <div className="flex flex-col justify-start items-start text-left">
            <SectionTitle>BİLİMSEL KEŞİFLER</SectionTitle>
            <SectionDescription>2 doğal elementin sinerjisi: Moleküler Oksijen ve Hyaluronik Asit</SectionDescription>
          </div>
          <ImageComponent imageUrl={discoveryPic} />
        </div>
      </section>
    </MainComponent>
  )
}