import CommunicationHeader from "./communicationHeader/communicationHeader"
import LogoWithNavHeader from "./logoWithNavHeader/logoWithNavHeader"
export default function Header() {
  return (
    <header className="flex flex-col">
      <CommunicationHeader />
      <LogoWithNavHeader />
    </header>
  )
}