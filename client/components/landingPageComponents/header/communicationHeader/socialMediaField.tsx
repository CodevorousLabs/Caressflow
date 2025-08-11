import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function SocialMediaField() {
  return (
    <div className="flex space-x-5 items-center justify-between text-white text-[16px]">
      <Link target="blank" href={"https://www.facebook.com/caressflowtr"}>
        <FaFacebookSquare />
      </Link>
      <Link href={"https://www.youtube.com/@CaressflowTr"}>
        <FaYoutube />
      </Link>
      <Link href={"https://www.instagram.com/caressflowtr/"}>
        <FaInstagram />
      </Link>
    </div>
  )
}