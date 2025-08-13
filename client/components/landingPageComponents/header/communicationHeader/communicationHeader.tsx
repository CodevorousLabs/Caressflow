import CommunicationField from "./communicationField"
import SocialMediaField from "./socialMediaField"
export default function CommunicationHeader() {
  return (
    <div className="max-[400px]:hidden flex justify-between items-center py-2.5 bg-pink-bg text-white px-16 font-rubik">
      <CommunicationField />
      <SocialMediaField />
    </div>
  )
}