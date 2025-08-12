import Slider from "./sliderSection/slider"
import Features from "./features/features"
import News from "./news/news"
export default function LandingPage() {
  return (
    <main>
      <Slider />
      <section>
        <Features />
        <News />
      </section>
    </main>
  )
}