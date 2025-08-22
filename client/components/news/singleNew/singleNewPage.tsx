import MainComponent from "@/components/reusableComponents/mainComponent"
import SectionDescription from "@/components/reusableComponents/sectionDescription"
import Image from "next/image"
import dayjs from 'dayjs'
import { FaRegCalendar, FaRegUser } from "react-icons/fa";

interface ComponentProps {
  chosenNew: {
    slug?: string,
    user_created?: string,
    date_created?: string, //ISO
    user_updated?: string,
    date_updated?: string,
    title?: string,
    body: {
      time: number,
      blocks: {
        id: string,
        type: string,
        data: {
          text: string,
          level: number,
          items: {text: string, checked: boolean}[]
        }
      }[],
      version: string
    },
    Image?: { // File Path
      id: string,
      height: number,
      width: number
    }
  }
}

export default function SingleNewPage({ chosenNew }: ComponentProps) {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-col justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          {chosenNew?.Image && (
            <div className="relative h-auto w-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${chosenNew.Image.id}`}
                alt={chosenNew.title ?? "Haber görseli"}
                width={chosenNew.Image.width}
                height={chosenNew.Image.height}
              />
            </div>
          )}

          <div className="flex flex-col justify-start items-start text-left">
            <SectionDescription>{chosenNew?.title}</SectionDescription>
            <div className="flex w-full justify-start items-center space-x-5">
              <p className="text-gray-500 flex items-center">
                <FaRegUser className="text-pink-bg mr-2" />
                CARESSFLOWADMIN
              </p>

              <p className="text-gray-500 flex items-center">
                <FaRegCalendar className="text-pink-bg mr-2" />
                {dayjs(chosenNew?.date_created).format("DD  MMMM  YYYY")}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start text-left space-y-5">
            {chosenNew.body.blocks.map((txt) => {
              if (txt.type === 'header') {
                return (
                  <p className={`text-${txt.data.level}xl text-gray-text font-heebo`}>{txt.data.text}</p>
                )
              }

              if (txt.type === 'paragraph') {
                return (
                  <p className="font-heebo">{txt.data.text}</p>
                )
              }

              if (txt.type === 'quote') {
                return (
                  <blockquote
                    key={txt.id}
                    className="font-heebo italic border-l-4 border-pink-bg bg-gray-50 text-gray-700 px-4 py-3 rounded-md"
                  >
                    “{txt.data.text}”
                  </blockquote>
                )
              }

              if (txt.type === 'checklist') {
                return (
                  <ul key={txt.id} className="list-none space-y-2">
                    {txt.data.items.map((listItem, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 mt-2 rounded-full bg-pink-bg"></span>
                        <span className="font-heebo">{listItem.text}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
            })}
          </div>
        </div>
      </section>
    </MainComponent>
  )
}