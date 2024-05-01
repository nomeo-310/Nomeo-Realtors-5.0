'use client'

import React from 'react'
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion'
import { frequentlyAskedQuestion } from '@/components/data/constants'
import Link from 'next/link'

type frequentlyAskedQuestionsProps = {
  data: frequentlyAskedQuestion[]
}

const FrequentlyAskedQuestions = ({data}:frequentlyAskedQuestionsProps) => {

  const [currentIndex, setCurrentIndex] = React.useState(-1);

  const toggleAccordion = React.useCallback((index: number) => {
    setCurrentIndex((currentValue) => (currentValue !== index ? index : -1));
  },[]);

  return (
    <ul className='mt-8 cursor-pointer'>
      {data.map((t:frequentlyAskedQuestion, index:number) => (
        <FrequentlyAskedQuestion
          key={index} 
          title={t.question} 
          content={t.answer} 
          isOpen={index === currentIndex} 
          onClick={() => toggleAccordion(index)}        
        />
      ))}
      <div className='mt-8 md:mt-10'>
        <p className='lg:text-xl text-lg'>Still have questions? Feel free to <Link href={'/contact'} className='text-yellow-400 underline'>Contact us</Link></p>
      </div>
    </ul>
  )
}

export default FrequentlyAskedQuestions