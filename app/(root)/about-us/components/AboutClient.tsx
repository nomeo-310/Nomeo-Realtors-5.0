'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import { aboutUsData } from '@/components/data/constants'

type Props = {}

const AboutClient = (props: Props) => {
  return (
    <Box className='pt-16 lg:pt-20'>
      <div className='pt-10'>
        <h2 className='lg:text-2xl text-xl text-center'>About Us</h2>
        <p className='lg:text-xl md:text-lg mt-5'>{aboutUsData.maintitle}</p>
        <h2 className='lg:text-4xl text-2xl mb-2 mt-10'>What sets us apart?</h2>
        <p className='lg:text-xl md:text-lg mb-6 lg:mb-8'>{aboutUsData.whatSetUsApart.subtitle}</p>
        <ul className='list-disc list-inside'>
          {aboutUsData.whatSetUsApart.setApart.map((item:{ title: string; body: string; }, index:number) => (
          <li className='lg:text-xl md:text-lg mb-5 md:mb-6 lg:mb-8 last:mb-0' key={index}>
            <span className='font-semibold'>{item.title}:</span> {item.body}
          </li>
          ))}
        </ul>
        <h2 className='lg:text-4xl text-2xl mb-2 mt-10'>What partnering with Nomeo Suites means?</h2>
        <p className='lg:text-xl md:text-lg mb-6 lg:mb-8'>{aboutUsData.partneringWithUs.subtitle}</p>
        <ul className='list-disc list-inside'>
          {aboutUsData.partneringWithUs.whyPartner.map((item:{ title: string; body: string; }, index:number) => (
          <li className='lg:text-xl md:text-lg mb-5 md:mb-6 lg:mb-8 last:mb-0' key={index}>
            <span className='font-semibold'>{item.title}:</span> {item.body}
          </li>
          ))}
        </ul>
        <div>
          <h2 className='lg:text-4xl text-2xl mb-5 mt-10' id='ourservices'>What services do we render?</h2>
          <p className='lg:text-xl md:text-lg mb-2'>{aboutUsData.whatservice.subtitle}</p>
          <p className='lg:text-xl md:text-lg mb-6 lg:mb-8'>We offer a comprehensive range of services, including:</p>
          <ul className='list-disc list-inside'>
            {aboutUsData.whatservice.ourServices.map((item:{ title: string; body: string; id:string }, index:number) => (
            <li className='lg:text-xl md:text-lg mb-5 md:mb-6 lg:mb-8 last:mb-0' key={index} id={item.id}>
              <span className='font-semibold'>{item.title}:</span> {item.body}
            </li>
            ))}
          </ul>
        </div>
        <h2 className='lg:text-4xl text-2xl mb-5 mt-10'>Meet our team</h2>
        <p className='lg:text-xl md:text-lg mb-2'>{aboutUsData.meetTheTeam.subtitle}</p>
      </div>
    </Box>
  )
}

export default AboutClient