import App from "../App"
import FeaturedRealEstateProjects from "../components/FeaturedRealEstateProjects/FeaturedRealEstateProjects"
import HeroSection from "../components/HeroSection/HeroSection"
import NewsBds from "../components/NewsBds/NewsBds"
import { RealEstateByLocation } from "../components/RealEstateByLocation/RealEstateByLocation"
import RealEstateForYou from "../components/RealEstateForYou/RealEstateForYou"
import RealEstateNews from "../components/RealEstateNews/RealEstateNews"

const Home = () => {
  return (
     <>
     <App/>
     <HeroSection/>
      <main className="w-full flex justify-center">
      <section className="w-[90%]">
    
     <NewsBds/>
     <RealEstateForYou/>
     <FeaturedRealEstateProjects/>
     <RealEstateByLocation/>
     <RealEstateNews/>
      </section>
      </main>
     </>
  )
}

export default Home
