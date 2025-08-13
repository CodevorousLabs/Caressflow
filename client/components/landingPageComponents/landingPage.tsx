import Slider from "./sliderSection/slider"
import Features from "./features/features"
import News from "./news/news"
import Stats from "./stats/stats"
import Feedbacks from "./feedbacks/feedbacks"
import InformationSection from "./informationSection/informationSection"
import Footer from "./footer/footer"
import bg from "@/assets/backgroundTexture.jpg"
export default function LandingPage() {
  return (
    <main style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "contain",

    }}>
      <Slider />
      <section className="w-full mx-auto flex flex-col items-center border border-black">
        <Features />
        {/* <Stats /> */}
        <div className="w-full bg-[#FCF7FF]">
          <News />
        </div>
        <Feedbacks />
        <div className="w-full bg-[#FCF7FF]">
          <InformationSection />
        </div>
        <div className="w-full bg-[#FCF7FF]">
          <Footer />
        </div>
      </section>
    </main>
  )
}