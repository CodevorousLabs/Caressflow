import MainComponent from "../reusableComponents/mainComponent"
import SectionTitle from "../reusableComponents/sectionTitle"
import SectionDescription from "../reusableComponents/sectionDescription"
import AnimatedButton from "../reusableComponents/animatedButton"
import ImageComponent from "../reusableComponents/imageComponent"
import publics1 from "@/public/assets/publicsPage/publics1.png"
import publics2 from "@/public/assets/publicsPage/publics2.png"
import readPublics from "@/lib/readPublics"

export default async function PublicationsPage() {


  /*  const publics: Record<string, any> = await readPublics() */

  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <div className="flex flex-col justify-start items-start text-left">
            <SectionTitle>CARESS FLOW</SectionTitle>
            <SectionDescription>Doktorlar ve Profesyoneller için Faydalar</SectionDescription>
          </div>
          <ImageComponent imageUrl={publics1} />
          <div className="flex justify-center items-center w-full">
            <AnimatedButton>BİLİMSEL YAYINLAR</AnimatedButton>
          </div>
          <ImageComponent imageUrl={publics2} />
          <div className="flex justify-center items-center w-full">
            <AnimatedButton>BİLİMSEL YAYINLAR</AnimatedButton>
          </div>
        </div>
      </section>
    </MainComponent>
  )
}