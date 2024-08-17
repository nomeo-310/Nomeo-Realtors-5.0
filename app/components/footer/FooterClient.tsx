'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import TopSection from './TopSection'
import BottomSection from './BottomSection'


const FooterClient = () => {

  return (
    <div className='bg-yellow-400'>
      <Box className='lg:pt-20 pt-16 lg:pb-10 pb-8'>
        <TopSection />
        <hr/>
        <BottomSection/>
      </Box>
    </div>
  )
}

export default FooterClient;