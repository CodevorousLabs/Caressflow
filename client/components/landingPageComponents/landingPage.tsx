import MainComponent from "../reusableComponents/mainComponent"
import Slider from "./sliderSection/slider"
import Features from "./features/features"
import News from "./news/news"
import Stats from "./stats/stats"
import Feedbacks from "./feedbacks/feedbacks"
import GoUpButton from "./goUpButton"

export default function LandingPage() {
  return (
    <MainComponent>
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
    </MainComponent>
  )
}