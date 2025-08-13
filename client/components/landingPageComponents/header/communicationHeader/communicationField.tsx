import { MdOutlineLocalPhone } from "react-icons/md";
import { GoMail } from "react-icons/go";

export default function CommunicationField() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 items-center justify-center text-[14px]">
      <div className="flex items-center gap-2">
        <MdOutlineLocalPhone className="text-lg" />
        <a href="tel:905375224051" className="hover:underline">0537 522 40 51</a>
      </div>

      <div className="flex items-center gap-2">
        <GoMail className="text-lg" />
        <a title="Contact Us" href="mailto:info@caressflow.com.tr" className="hover:underline">
          info@caressflow.com.tr
        </a>
      </div>
    </div>
  )
}
