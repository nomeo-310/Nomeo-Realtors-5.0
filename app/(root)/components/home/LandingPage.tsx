'use client'

import Image from 'next/image'
import React from 'react'
import HomePageSearchBar from './HomePageSearchBar'

const LandingPage = () => {
  return (
    <div className='h-screen w-full'>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-hidden">
        <Image src={'/images/desktop_banner.png'} className='object-cover hidden md:block' fill alt='banner' priority/>
        <Image src={'/images/mobile_banner.png'} className='object-cover md:hidden' fill alt='banner' priority/>
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center gap-12 flex-col lg:pt-[5%] pt-[10%]">
        <div className="flex flex-col lg:gap-10 gap-8">
          <div className="flex flex-col items-center">
            <h2 className='lg:text-7xl text-3xl text-white'>Find a modern property</h2>
            <h2 className='lg:text-7xl text-3xl text-white'>that <span className='text-yellow-400'>suits you.</span></h2>
          </div>
          <div>
            <h2 className='text-white lg:text-3xl text-xl lg:w-[78%] w-[80%] mx-auto text-center'>Discover the perfect property that suits your unique style and needs.</h2>
          </div>
        </div>
        <div className='lg:w-[70%] w-[80%] mx-auto'>
          <HomePageSearchBar />
        </div>
      </div>
    </div>
  )
}

export default LandingPage