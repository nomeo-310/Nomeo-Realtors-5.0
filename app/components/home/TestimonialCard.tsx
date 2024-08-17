'use client'


import React from 'react'
import Card from '@/components/shared/Card'
import ImageAvatar from '@/components/shared/ImageAvatar'
import { LiaQuoteLeftSolid } from 'react-icons/lia'

type testimonyCardProps = {
  testimony:string
  profileImage?: string
  name:string
  career:string
  title:string
}

const TestimonialCard = ({testimony, profileImage, name, career, title}: testimonyCardProps) => {
  return (
    <Card className=''>
      <div className='lg:p-3 p-2 md:p-0 dark:text-white'>
        <h2 className='mb-5 font-semibold lg:text-xl text-lg capitalize'>{title}</h2>
        <div className='lg:mb-6 mb-5'>
          <div className='p-1 border rounded float-left mr-2 mt-2 text-gray-500'>
            <LiaQuoteLeftSolid size={28}/>
          </div>
          <p className='text-gray-500'>{testimony}</p>
        </div>
        <div className='w-full flex gap-2 justify-between items-center'>
          <ImageAvatar src={profileImage} className='rounded overflow-hidden lg:w-14 lg:h-14'/>
          <div className='md:text-center'>
            <h2 className='font-semibold capitalize text-lg'>{name}</h2>
            <h2 className='text-gray-500 dark:text-white capitalize'>{career}</h2>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard;