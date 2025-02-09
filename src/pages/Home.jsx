
import FeaturedRealEstateProjects from "../components/FeaturedRealEstateProjects/FeaturedRealEstateProjects"
import HeroSection from "../components/HeroSection/HeroSection"
import NewsBds from "../components/NewsBds/NewsBds"
import PressNews from "../components/PressNews/PressNews"
import { RealEstateByLocation } from "../components/RealEstateByLocation/RealEstateByLocation"
import RealEstateForYou from "../components/RealEstateForYou/RealEstateForYou"
import RealEstateNews from "../components/RealEstateNews/RealEstateNews"
import SupportUtilities from "../components/SupportUtilities/SupportUtilities"
const Home = () => {
  return (
     <>
     <HeroSection/>
      <main className="w-full flex justify-center">
      <section className="w-[90%]">
     <NewsBds/>
     <RealEstateForYou/>
     <FeaturedRealEstateProjects/>
     <RealEstateByLocation/>
     <RealEstateNews/>
     <SupportUtilities/>
     <PressNews/>
      </section>
      </main>
     </>
  )
}

export default Home
