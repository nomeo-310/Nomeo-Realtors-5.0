import React from "react";
import { getCurrentUser } from "@/libs/actions/data.action";
import LandingPage from "./components/home/LandingPage";
import OurServiceSection from "./components/home/OurServiceSection";
import FeaturedPropertiesSection from "./components/home/FeaturedPropertiesSection";
import LatestBlogSection from "./components/home/LatestBlogSection";
import OurTestimonialSection from "./components/home/OurTestimonialSection";
import FrequentlyAskedQuestionsSection from "./components/home/FrequentlyAskedQuestionsSection";
import { LuLoader2 } from "react-icons/lu";
import Footer from "./components/footer/Footer";

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <React.Fragment>
      <LandingPage />
      <OurServiceSection />
      <React.Suspense fallback={ <LuLoader2 className='mx-auto animate-spin'/>}>
        <FeaturedPropertiesSection currentUser={currentUser}/>
      </React.Suspense>
      <LatestBlogSection />
      <OurTestimonialSection />
      <FrequentlyAskedQuestionsSection />
      <Footer/>
    </React.Fragment>
  )
}

export default Home;
