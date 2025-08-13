import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <div className="flex justify-between items-center w-full py-5 px-10 bg-white rounded-2xl font-rubik shadow-lg
      max-lg:w-10/12 
      max-lg:flex-col
      max-lg:items-start
      max-lg:gap-5
      max-[380px]:px-5
    ">

      <div className="flex w-1/4 items-center space-x-7 max-lg:w-full max-[380px]:space-x-2">
        <div className="p-2 border border-[##EBF2F3] rounded-full">
          <MdOutlineLocationOn className="text-pink-bg overflow-visible text-lg" />
        </div>
        <p className="text-[#686A6F]">Ataköy 7-8-9-10. Kısım Mahallesi, Çobançeşme E-5 Yanyol Caddesi, Ataköy Towers 20-A/52 Bakırköy/İstanbul</p>
      </div>

      <div className="flex items-center space-x-7 max-[380px]:space-x-2">
        <div className="p-2 border border-[##EBF2F3] rounded-full">
          <FiPhone className="text-pink-bg overflow-visible text-lg" />
        </div>
        <a href="tel:905375224051" className="text-pink-bg">0537 522 40 51</a>
      </div>

      <div className="flex items-center space-x-7 max-[380px]:space-x-2">
        <div className="p-2 border border-[##EBF2F3] rounded-full">
          <FaRegEnvelope className="text-pink-bg overflow-visible text-lg max" />
        </div>
        <a href="mailto:info@caressflow.com.tr" className="text-[#686A6F]">info@caressflow.com.tr</a>
      </div>
    </div>
  );
}
