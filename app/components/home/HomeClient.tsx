"use client";

import React from "react";
import LandingPage from "./LandingPage";
import OurServiceSection from "./OurServiceSection";
import OurTestimonialSection from "./OurTestimonialSection";
import FrequentlyAskedQuestionsSection from "./FrequentlyAskedQuestionsSection";
import LatestBlogSection from "./LatestBlogSection";
import FeaturedPropertiesSection from "./FeaturedPropertiesSection";
import { currentUserProps, featuredPropertiesProps } from "@/types/types";

type homeClientProps = {
  featuredProperties: featuredPropertiesProps[]
  currentUser: currentUserProps
}

const HomeClient = ({featuredProperties, currentUser}:homeClientProps) => {
  return (
    <React.Fragment>
      <LandingPage />
      <OurServiceSection />
      <FeaturedPropertiesSection featuredProperties={featuredProperties} currentUser={currentUser}/>
      <LatestBlogSection />
      <OurTestimonialSection />
      <FrequentlyAskedQuestionsSection />
    </React.Fragment>
  );
};

export default HomeClient;
