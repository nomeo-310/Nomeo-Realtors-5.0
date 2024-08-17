'use client'

import Box from '@/components/shared/Box';
import React from 'react'
import Header from './Header';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import { frequentlyAskedQuestions } from '@/components/data/constants';


const FrequentlyAskedQuestionsSection = () => {
  return (
    <Box className='lg:py-20 py-16' id='faq'>
      <Header
        mainTitle='Frequently Asked Questions'
        subTitle="At Nomeo Suites, we understand that navigating the real estate market can bring up a lot of questions.  Whether you're a first-time homebuyer, a seasoned investor, or a curious renter, we're here to help!  We've compiled a list of frequently asked questions to shed some light on the process and empower you to make informed decisions."
      />
      <FrequentlyAskedQuestions data={frequentlyAskedQuestions}/>
    </Box>
  )
}

export default FrequentlyAskedQuestionsSection;