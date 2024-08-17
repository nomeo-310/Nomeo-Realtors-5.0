"use client";

import React from "react";
import LandingPage from "./LandingPage";
import OurServiceSection from "./OurServiceSection";
import OurTestimonialSection from "./OurTestimonialSection";
import FrequentlyAskedQuestionsSection from "./FrequentlyAskedQuestionsSection";
import LatestBlogSection from "./LatestBlogSection";
import FeaturedPropertiesSection from "./FeaturedPropertiesSection";
import { currentUserProps } from "@/types/types";

type homeClientProps = {
  currentUser: currentUserProps
}

const HomeClient = ({currentUser}:homeClientProps) => {
  return (
    <React.Fragment>
      <LandingPage />
      <OurServiceSection />
      <FeaturedPropertiesSection currentUser={currentUser}/>
      <LatestBlogSection />
      <OurTestimonialSection />
      <FrequentlyAskedQuestionsSection />
    </React.Fragment>
  );
};

export default HomeClient;
