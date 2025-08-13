import CommunicationHeader from "./communicationHeader/communicationHeader"
import LogoWithNavHeader from "./logoWithNavHeader/logoWithNavHeader"
import ResponsiveHeader from "./logoWithNavHeader/responsiveHeader"
export default function Header() {
  return (
    <header className="flex flex-col">
      <CommunicationHeader />
      <LogoWithNavHeader />
      <ResponsiveHeader />
    </header>
  )
}