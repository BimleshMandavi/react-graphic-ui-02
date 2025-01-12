import Header from "../src/components/Header"
import HeroSection from "../src/components/HeroSection"
import FeaturesSection  from "../src/components/FeaturesSection"
import Services from "../src/components/Services"
import ExpertToolsSection from "./components/ExpertToolsSection"
import ZeptoCard from "./components/ZeptoCard"
import CaseStudySection from "./components/CaseStudySection"
import Statistics from "../src/components/Statistics"
import Testimonials from "./components/Testimonials"
import CreativeTalentSection from "./components/CreativeTalentSection"
import BusinessUI from "./components/BusinessUI"
import FAQ from "../src/components/FAQ"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import Nav_01 from "./components/Nav_01"

function App() {


  return (
    <>
    <div className="bg-[#FAF6F0] overflow-x-hidden">
      <Nav_01 />
    <Header />
      <HeroSection />
      <FeaturesSection />
      <Services />
      <ExpertToolsSection />
      <Statistics />
      <ZeptoCard />
      <CaseStudySection />
      <Testimonials />
      <CreativeTalentSection />
      <BusinessUI />
      <FAQ />
      <LandingPage />
      <Footer />
      </div>
    </>
  )
}

export default App;
