'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import TeamSection from './TeamSection'
import SetApartSection from './SetApartSection'
import PartnerSection from './PartnerSection'
import ServicesSection from './ServicesSection'
import { aboutUsData } from '@/components/data/constants'


const AboutClient = () => {
  return (
    <Box className='pt-16 lg:pt-20'>
      <div className='pt-10'>
        <h2 className='lg:text-2xl text-xl text-center'>About Us</h2>
        <p className='lg:text-xl md:text-lg mt-5'>{aboutUsData.maintitle}</p>
        <SetApartSection/>
        <PartnerSection/>
        <ServicesSection/>
        <TeamSection/>
      </div>
    </Box>
  )
}

export default AboutClient