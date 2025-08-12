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

      <div className="flex w-full justify-around items-start">
        <div className="flex flex-col space-y-3 font-rubik justify-between">

          <Image src={logo} alt="CaressFlowLogo" />
          <Link href={'https://www.iubenda.com/privacy-policy/65695163'} className="text-pink-bg">Gizlilik Politikası</Link>


          <div className="flex w-full items-center justify-start gap-10">
            <div className="p-2 rounded-full hover:bg-[#00ACB1] group cursor-pointer">
              <Link href={"https://www.facebook.com/caressflowtr"}>
                <FaFacebookSquare className="text-[#00ACB1] group-hover:text-white duration-100" />
              </Link>
            </div>
            <div className="p-2 rounded-full hover:bg-[#00ACB1] group cursor-pointer">
              <Link href={"https://www.youtube.com/@CaressflowTr"}>
                <FaYoutube className="text-[#00ACB1] group-hover:text-white duration-100" />
              </Link>
            </div>
            <div className="p-2 rounded-full hover:bg-[#00ACB1] group">
              <Link href={"https://www.instagram.com/caressflowtr/"}>
                <FaInstagram className="text-[#00ACB1] group-hover:text-white duration-100 group-hover:cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <FormSection />
      </div>
    </div>
  )
}