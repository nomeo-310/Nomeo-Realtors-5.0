'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import Header from './Header'
import TestimonialSlider from './TestimonialSlider'
import { testimonyList } from '@/components/data/constants'


const OurTestimonialSection = () => {
  return (
    <Box className='lg:py-20 py-16' id='testimonials'>
      <Header 
        mainTitle='What our customers are saying'
        subTitle="Don't just take our word for it! Here at Nomeo Suites, we're dedicated to providing exceptional service to our clients on all sides of the Lagos real estate market.  See what some of our satisfied customers have to say about their experiences with our team:"
      />
      <TestimonialSlider testimonials={testimonyList}/>
    </Box>
  )
}

export default OurTestimonialSection;