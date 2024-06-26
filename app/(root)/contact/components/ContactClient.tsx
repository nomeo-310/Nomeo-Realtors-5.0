'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import LeftSection from './LeftSection'
import RightSection from './RightSection'


const ContactClient = () => {

  return (
    <Box className='pt-20 lg:pt-24'>
      <h2 className="lg:text-2xl text-xl mb-6 md:mb-8">Contact us</h2>
      <div className="w-full grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-3 lg:h-[46rem] h-full">
        <LeftSection />
        <RightSection />
      </div>
    </Box>
  )
}

export default ContactClient;