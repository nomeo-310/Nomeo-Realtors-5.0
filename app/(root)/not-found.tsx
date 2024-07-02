import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='pt-20 h-screen w-full flex items-center justify-center'>
      <div className="flex md:gap-8 items-center flex-col p-8 gap-14">
        <div className="relative overflow-hidden rounded-md aspect-video shadow-lg lg:w-[44rem] w-full">
          <Image src="/images/404.jpg" className='aspect-video' fill alt='404_banner' />
        </div>
        <div className='text-center'>
          <h1 className='text-3xl lg:text-5xl leading-7 text-center'>Page not found!</h1>
          <p className='text-dark-grey text-lg lg:text-xl leading-7 mt-5 text-center'>The page you are looking for does not exist. Head back to the <Link href="/" className='text-black underline text-xl font-semibold'>home page</Link></p>
        </div>
      </div>
    </div>
  )
};

export default NotFound;