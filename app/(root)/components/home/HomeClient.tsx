'use client'

import React from 'react'
import LandingPage from './LandingPage';
import OurServiceSection from './OurServiceSection';
import OurTestimonialSection from './OurTestimonialSection';
import FrequentlyAskedQuestionsSection from './FrequentlyAskedQuestionsSection';
import LatestBlogSection from './LatestBlogSection';
import FeaturedPropertiesSection from './FeaturedPropertiesSection';


const HomeClient = () => {
  return (
    <React.Fragment>
      <LandingPage/>
      <OurServiceSection/>
      <FeaturedPropertiesSection/>
      <LatestBlogSection/>
      <OurTestimonialSection/>
      <FrequentlyAskedQuestionsSection/>
    </React.Fragment>
  )
}

export default HomeClient;