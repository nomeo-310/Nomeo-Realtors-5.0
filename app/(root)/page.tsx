import React from "react";
import { getFeaturedProperties } from "@/libs/actions/properties.action";
import { getCurrentUser } from "@/libs/actions/data.action";
import LandingPage from "./components/home/LandingPage";
import OurServiceSection from "./components/home/OurServiceSection";
import FeaturedPropertiesSection from "./components/home/FeaturedPropertiesSection";
import LatestBlogSection from "./components/home/LatestBlogSection";
import OurTestimonialSection from "./components/home/OurTestimonialSection";
import FrequentlyAskedQuestionsSection from "./components/home/FrequentlyAskedQuestionsSection";
import { getFeaturedBlogs } from "@/libs/actions/blogs.action";

const Home = async () => {
  const featuredProperties = await getFeaturedProperties();
  const currentUser = await getCurrentUser();
  const featuredBlogs = await getFeaturedBlogs();

  return (
    <React.Fragment>
      <LandingPage />
      <OurServiceSection />
      <FeaturedPropertiesSection featuredProperties={featuredProperties} currentUser={currentUser}/>
      <LatestBlogSection featuredBlogs={featuredBlogs}/>
      <OurTestimonialSection />
      <FrequentlyAskedQuestionsSection />
    </React.Fragment>
  )
}

export default Home;
