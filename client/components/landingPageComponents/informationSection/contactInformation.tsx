import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";

export default function ContactInformation() {
  return (
    <div className="flex justify-around items-center w-full py-5 px-10 bg-white rounded-xl font-rubik shadow-lg">
      <div className="flex items-center space-x-10 ">
        <MdOutlineLocationOn size={24} className="text-pink-bg" />
        <p className=" text-[#686A6F]">Ataköy 7-8-9-10. Kısım Mahallesi, <br /> Çobançeşme E-5 Yanyol Caddesi, <br /> Ataköy Towers 20-A/52 <br /> Bakırköy/İstanbul</p>
      </div>
      <div className="flex items-center space-x-7">
        <FiPhone size={24} className="text-pink-bg" />
        <a href="tel:905375224051" className=" text-pink-bg">0537 522 40 51</a>
      </div>
      <div className="flex items-center space-x-7">
        <FaRegEnvelope size={24} className="text-pink-bg" />
        <a href="mailto:info@caressflow.com.tr" className="text-[#686A6F]">info@caressflow.com.tr</a>
      </div>
    </div>
  )
}