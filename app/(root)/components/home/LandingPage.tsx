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
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center md:gap-12 gap-7 flex-col lg:pt-[3%] pt-[12%]">
        <div className="flex flex-col lg:gap-10 md:gap-8 gap-5">
          <div className="flex flex-col items-center slide-in-top_1">
            <h2 className='lg:text-7xl md:text-5xl text-2xl text-white'>Find a modern property</h2>
            <h2 className='lg:text-7xl md:text-5xl text-2xl text-white'>that <span className='text-yellow-400'>suits you.</span></h2>
          </div>
          <div className='slide-in-top_2'>
            <h2 className='text-white lg:text-3xl md:text-2xl text-lg lg:w-[78%] w-[80%] mx-auto text-center'>Discover the perfect property that suits your unique style and needs.</h2>
          </div>
        </div>
        <div className='lg:w-[70%] md:w-[80%] w-[92%] mx-auto slide-in-top_3'>
          <HomePageSearchBar />
        </div>
      </div>
    </div>
  )
}

export default LandingPage