'iuse client'

import React from 'react'
import { IconType } from 'react-icons/lib'
import Link from 'next/link'

type cardProps = {
  icon: IconType
  title: string
  subTitle: string
  id: string
}

const OurServiceCard = ({icon:Icon, subTitle, title, id}:cardProps) => {
  return (
    <div className="border p-4 md:p-3 lg:p-8 md:aspect-square aspect-video hover:drop-shadow-md hover:bg-white active:bg-white flex active:border-0 hover:border-0 items-center justify-center rounded-md flex-col gap-6">
      <div className='flex items-center w-full gap-4 md:gap-2 lg:justify-center justify-normal'>
        <div className="lg:w-28 lg:h-28 w-20 h-20 md:w-16 md:h-16 rounded bg-neutral-200 flex items-center justify-center">
          <Icon size={80} className='text-neutral-700 lg:block hidden'/>
          <Icon size={45} className='text-neutral-700 lg:hidden md:block hidden'/>
          <Icon size={55} className='text-neutral-700 md:hidden'/>
        </div>
        <p className='lg:hidden text-2xl md:text-lg font-medium'>{title}</p>
      </div>
      <p className='lg:block hidden text-2xl font-medium'>{title}</p>
      <p className='line-clamp-4 lg:text-center'>{subTitle}</p>
      <div className='flex items-center justify-start w-full'>
        <Link href={`/about-us/${id}`} className='lg:text-xl text-lg text-yellow-500'>Read more...</Link>
      </div>
    </div>
  )
};

export default OurServiceCard;