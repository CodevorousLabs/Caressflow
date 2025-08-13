import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ContactInformation from "./contactInformation"
import logo from "@/assets/caressFlowLogo.png"
import Image from "next/image";
import Link from "next/link";
import FormSection from "./formSection";
export default function InformationSection() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center py-[100px] gap-14">
      <ContactInformation />

      <div className="flex w-full justify-around items-start gap-10 flex-col lg:flex-row lg:items-start lg:justify-between px-6 py-12 max-w-7xl mx-auto max-lg:items-center">
        <div className="flex flex-col space-y-6 font-rubik max-w-xs w-full items-center">
          <Image src={logo} alt="CaressFlowLogo" className="mb-4" />
          <Link href="https://www.iubenda.com/privacy-policy/65695163" className="text-pink-bg hover:underline">
            Gizlilik Politikası
          </Link>

          <div className="flex items-center justify-center lg:justify-start gap-6 mt-4">
            <Link href="https://www.facebook.com/caressflowtr">
              <FaFacebookSquare className="text-[#00ACB1] group-hover:text-white text-2xl" />
            </Link>
            <Link href="https://www.youtube.com/@CaressflowTr">
              <FaYoutube className="text-[#00ACB1] group-hover:text-white text-2xl" />
            </Link>
            <Link href="https://www.instagram.com/caressflowtr/">
              <FaInstagram className="text-[#00ACB1] group-hover:text-white text-2xl" />
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md">
          <FormSection />
        </div>
      </div>
    </div>
  )
}