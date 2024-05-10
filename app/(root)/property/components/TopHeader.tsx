'use client'


import React from 'react'
import { propertyProps } from '@/components/data/constants';
import LikeButton from '@/components/shared/LikeButton';
import SaveButton from '@/components/shared/SaveButton';
import { HiOutlineMapPin } from 'react-icons/hi2';

interface Props {
  
}

const TopHeader = ({property}:{property:propertyProps}) => {
  return (
    <div className='lg:mb-5 mb-4'>
      <h2 className='lg:text-3xl md:text-2xl text-xl'>{property.title}.</h2>
      <div className="w-full flex md:flex-row flex-col md:items-center justify-between gap-2 md:gap-0">
        <div className='flex items-center'>
          <div className='flex items-center gap-2 border-r border-black pr-2'>
            <HiOutlineMapPin size={24} className='hidden md:block'/>
            <HiOutlineMapPin size={20} className='md:hidden'/>
            <p className='lg:text-lg'>{property.location}</p>
          </div>
          <div className='flex items-center gap-2 font-semibold'>
            <p className='lg:text-lg capitalize border-r border-black px-2'>for {property.propertTag}</p>
            <p  className='lg:text-lg capitalize'>{property.furnitureTag}</p>
          </div>
        </div>
        <div className='flex items-center gap-5 justify-end'>
          <LikeButton/>
          <SaveButton/>
        </div>
      </div>
    </div>
  )
};

export default TopHeader
