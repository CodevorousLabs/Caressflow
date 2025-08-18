import Slider from "./sliderSection/slider"
import Features from "./features/features"
import News from "./news/news"
import Stats from "./stats/stats"
import Feedbacks from "./feedbacks/feedbacks"
import bg from "@/assets/backgroundTexture.jpg"
import GoUpButton from "./goUpButton"

export default function LandingPage() {
  return (
    <main className="relative" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "contain",
    }}>
      <Slider />
      <section className="w-full mx-auto flex flex-col items-center">
        <Features />
        <Stats />
        <div className="w-full bg-[#FCF7FF]">
          <News />
        </div>
        <Feedbacks />
      </section>
      <GoUpButton />
    </main>
  )
}