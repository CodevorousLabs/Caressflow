import { MdOutlineLocalPhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
export default function CommunicationField() {
  return (
    <div className="flex space-x-10 items-center justify-between text-[14px]">
      <div className="flex items-center gap-2">
        <MdOutlineLocalPhone className="text-lg" />
        <a href="tel:905375224051">0537 522 40 51</a>
      </div>

      <div className="flex items-center gap-2">
        <GoMail className="text-lg" />
        <a title="Contact Us" href="mailto:info@caressflow.com.tr">info@caressflow.com.tr</a>
      </div>
    </div>
  )
}