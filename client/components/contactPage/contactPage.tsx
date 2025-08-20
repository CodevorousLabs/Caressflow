import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiHospital1 } from "react-icons/ci";
import InformationCard from "./informationCard"
import MainComponent from "../reusableComponents/mainComponent"
import ContactForm from "./contactForm";
export default function ContactPage() {
  return (
    <MainComponent>
      <section className="w-full mx-auto flex flex-col items-start">
        <div className="w-full md:w-10/12 lg:w-7/12 mx-auto flex flex-row justify-start items-start py-12 md:py-20 lg:py-[100px] gap-8 md:gap-12 lg:gap-14 px-4">
          <InformationCard
            icon={<CiHospital1 className="text-5xl text-white" />}
            title="Adres"
            text="Ataköy Towers 20-A/52"
          />
          <InformationCard
            icon={<FiPhone className="text-4xl text-white" />}
            title="Telefon"
            text="0537 522 40 51"
          />
          <InformationCard
            icon={<AiOutlineMail className="text-4xl text-white" />}
            title="Email"
            text="info@caressflow.com.tr"
          />
        </div>

        <div className="flex justify-center items-start w-full mb-10">
          <ContactForm />
        </div>
      </section>
    </MainComponent>
  )
}