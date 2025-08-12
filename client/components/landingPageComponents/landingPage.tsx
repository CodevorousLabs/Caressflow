import Slider from "./sliderSection/slider"
import Features from "./features/features"
import News from "./news/news"
import Stats from "./stats/stats"
import Feedbacks from "./feedbacks/feedbacks"
export default function LandingPage() {
  return (
    <main>
      <Slider />
      <section>
        <Features />
        <Stats />
        <News />
        <Feedbacks />
      </section>
    </main>
  )
}