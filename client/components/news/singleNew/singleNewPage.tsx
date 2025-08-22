import MainComponent from "@/components/reusableComponents/mainComponent"
import SectionDescription from "@/components/reusableComponents/sectionDescription"
import Image from "next/image"
interface ComponentProps {
  chosenNew: {
    slug?: string,
    user_created?: string,
    date_created?: string, //ISO
    user_updated?: string,
    date_updated?: string,
    title?: string,
    Image?: string // File Path
  }
}

export default function SingleNewPage({ chosenNew }: ComponentProps) {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          {chosenNew?.Image && (
            <div className="w-full relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${chosenNew.Image}`}
                alt={chosenNew.title ?? "Haber görseli"}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-col justify-start items-start text-left">
            <SectionDescription>{chosenNew?.title}</SectionDescription>
            <p className="text-sm text-gray-500 mt-2">
              {chosenNew?.date_created
                ? new Date(chosenNew.date_created).toLocaleDateString("tr-TR")
                : ""}
            </p>
          </div>
        </div>
      </section>
    </MainComponent>
  )
}