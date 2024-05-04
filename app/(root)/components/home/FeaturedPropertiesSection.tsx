'use client'


import React from 'react'
import Box from '@/components/shared/Box'
import Header from './Header'
import FeaturedProperties from './FeaturedProperties'

const FeaturedPropertiesSection = () => {

  return (
    <Box className='pb-0 lg:pb-0 lg:pt-20 pt-16' id='featuredProperties'>
      <Header
        mainTitle='Featured Properties'
        subTitle="Browse our featured listings below to get a glimpse of what we offer.  From modern apartments in desirable neighborhoods to luxurious homes with stunning amenities, we're confident you'll find a property that captures your heart."
      />
      <FeaturedProperties/>
    </Box>
  )
}

export default FeaturedPropertiesSection