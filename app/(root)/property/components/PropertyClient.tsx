/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import { HiChevronRight, HiOutlineMapPin, HiXMark } from 'react-icons/hi2'
import { propertyList } from '@/components/data/constants'
import Image from 'next/image'
import LikeButton from '@/components/shared/LikeButton'
import SaveButton from '@/components/shared/SaveButton'
import { twMerge } from 'tailwind-merge'
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia'



const PropertyClient = () => {

  const property = propertyList[0];
  const { propertyImageList } = property;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [openSlider, setOpenSlider] = React.useState(false);

  const nextSlide = () => {
    if (!propertyImageList) {
      return
    }

    const nextIndex = (currentIndex + 1) % propertyImageList.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    if (!propertyImageList) {
      return
    }

    const prevIndex = currentIndex === 0 ? propertyImageList.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const ViewAllButton = ({className}:{className?:string}) => {
    return (
      <button className={twMerge("absolute right-3 bottom-3  bg-white/90 py-3 px-3 rounded-md flex items-center", className)} onClick={() => setOpenSlider(true)}>
        <h2 className='md:text-sm lg:text-base'>View all {property.propertyImageList?.length} photos</h2>
        <div>
          <HiChevronRight size={22}/>
        </div>
      </button>
    )
  }

  return (
    <>
      <Box className='pt-20'>
        <div className='lg:mb-5 mb-4'>
          <h2 className='lg:text-4xl text-3xl mb-2'>{property.title}</h2>
          <div className="w-full flex items-center justify-between">
            <div className='flex items-center gap-2'>
              <HiOutlineMapPin size={24}/>
              <p className='lg:text-lg'>{property.location}</p>
            </div>
            <div className='flex items-center gap-5'>
              <LikeButton/>
              <SaveButton/>
            </div>
          </div>
        </div>
        <div className='w-full rounded overflow-hidden xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[20rem] grid md:grid-cols-2 gap-2 grid-cols-1'>
          <div className="w-full h-full rounded-md flex justify-center items-center relative overflow-hidden bg-neutral-500">
            <Image src={property.propertyImageList?.[0] || ''} alt='property_image_1' priority className='object-cover' fill/>
            <ViewAllButton  className='md:hidden'/>
          </div>
          <div className="w-full h-full md:grid grid-rows-2 overflow-hidden gap-2 hidden">
              <div className="w-full flex h-full justify-center items-center rounded-md relative overflow-hidden bg-neutral-500">
                <Image src={property.propertyImageList?.[1] || ''} alt='property_image_2' priority className='object-cover' fill/>
              </div>
              <div className="grid grid-cols-2 w-full h-full gap-2 overflow-hidden">
                <div className="w-full h-full rounded-md flex items-center justify-center relative overflow-hidden bg-neutral-500">
                  <Image src={property.propertyImageList?.[2] || ''} alt='property_image_3' priority className='object-cover' fill/>
                </div>
                <div className="w-full h-full rounded-md flex items-center justify-center overflow-hidden relative bg-neutral-500 cursor-pointer">
                  <Image src={property.propertyImageList?.[3] || ''} alt='property_image_4' priority className='object-cover' fill/>
                  <ViewAllButton />
                </div>
              </div>
          </div>
        </div>
      </Box>
      {openSlider &&
        <div className='fixed left-0 top-0 w-full h-full bg-black/60 z-[300000] overflow-hidden lg:p-8 md:p-12 p-6'>
          <button className="absolute right-6 top-6 w-11 h-11 bg-red-400 text-white flex items-center justify-center rounded-full" onClick={() =>setOpenSlider(false)}>
            <HiXMark size={22}/>
          </button>
          <div className="flex items-center gap-4 lg:gap-6 h-full w-full justify-center">
            <div>
              <button className='bg-white hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full' onClick={prevSlide}>
                <LiaArrowLeftSolid size={26} />
              </button>
            </div>
            <div className="h-full text-white items-center justify-center flex overflow-hidden">
              <img src={propertyImageList && propertyImageList[currentIndex]} alt="" className='h-full w-full object-contain'/>
            </div>
            <div>
              <button className='bg-white hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full' onClick={nextSlide}>
                <LiaArrowRightSolid size={26} />
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default PropertyClient
