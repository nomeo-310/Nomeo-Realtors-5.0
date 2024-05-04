'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import Header from './Header'
import OurServices from './OurServices'

const OurServiceSection = () => {
  return (
    <Box className='lg:pt-20 pt-16'>
      <Header 
        mainTitle='Our Services'
        link='/about/#ourservices'
        linkTitle='Read more...'
        subTitle="At Nomeo Suites, we offer a comprehensive range of services designed to empower you on your real estate journey in Lagos and other states we operate, whether you're a buyer, seller, landlord, or tenant."
      />
      <OurServices />
    </Box>
  )
}

export default OurServiceSection;