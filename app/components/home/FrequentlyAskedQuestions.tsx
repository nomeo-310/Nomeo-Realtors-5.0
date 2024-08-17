'use client'

import React from 'react'
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion'
import { frequentlyAskedQuestion } from '@/components/data/constants'
import Link from 'next/link'
import useAgentSignUp from '@/hooks/useAgentSignUp'

type frequentlyAskedQuestionsProps = {
  data: frequentlyAskedQuestion[]
}

const FrequentlyAskedQuestions = ({data}:frequentlyAskedQuestionsProps) => {
  const signUpAgent = useAgentSignUp();

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
        <p className='lg:text-xl text-lg'>Are you interested in being one of our real estate agents? Go ahead and  <button className='text-yellow-400 underline' onClick={signUpAgent.onOpen}>Create an account</button> with us.</p>
      </div>
    </ul>
  )
}

export default FrequentlyAskedQuestions