import React from "react";
import { getFeaturedProperties } from "@/libs/actions/properties.action";
import { getCurrentUser } from "@/libs/actions/data.action";
import LandingPage from "./components/home/LandingPage";
import OurServiceSection from "./components/home/OurServiceSection";
import FeaturedPropertiesSection from "./components/home/FeaturedPropertiesSection";
import LatestBlogSection from "./components/home/LatestBlogSection";
import OurTestimonialSection from "./components/home/OurTestimonialSection";
import FrequentlyAskedQuestionsSection from "./components/home/FrequentlyAskedQuestionsSection";

const Home = async () => {
  const featuredProperties = await getFeaturedProperties();
  const currentUser = await getCurrentUser();

  console.log(featuredProperties[0]);

  return (
    <React.Fragment>
      <LandingPage />
      <OurServiceSection />
      <FeaturedPropertiesSection featuredProperties={featuredProperties} currentUser={currentUser}/>
      <LatestBlogSection />
      <OurTestimonialSection />
      <FrequentlyAskedQuestionsSection />
    </React.Fragment>
  )
}

export default Home;
