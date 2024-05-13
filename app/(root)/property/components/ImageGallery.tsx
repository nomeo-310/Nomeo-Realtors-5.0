'use client'

import { propertyProps } from '@/components/data/constants';
import Image from 'next/image';
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';


const ImageGallery = ({property,  setOpenSlider}:{property:propertyProps, setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const nairaSign:string = String.fromCodePoint(8358);

  const ViewAllButton = ({className}:{className?:string}) => {
    return (
      <button className={twMerge("absolute right-3 bottom-3  bg-white py-2 px-3 rounded-md flex items-center", className)} onClick={() => setOpenSlider(true)}>
        <h2 className='md:text-sm lg:text-base'>View all {property.propertyImageList.length} photos</h2>
        <div>
          <HiChevronRight size={22}/>
        </div>
      </button>
    )
  };

  return (
    <React.Fragment>
      <div className='w-full rounded overflow-hidden xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[20rem] grid md:grid-cols-2 gap-2 grid-cols-1'>
        <div className="w-full h-full rounded-md flex justify-center items-center relative overflow-hidden bg-neutral-500">
          <Image src={property.propertyImageList[0]} alt='property_image_1' priority className='object-cover' fill/>
          <ViewAllButton  className='md:hidden rounded-full'/>
        </div>
        <div className="w-full h-full md:grid grid-rows-2 overflow-hidden gap-2 hidden">
            <div className="w-full flex h-full justify-center items-center rounded-md relative overflow-hidden bg-neutral-500">
              <Image src={property.propertyImageList[1]} alt='property_image_2' priority className='object-cover' fill/>
            </div>
            <div className="grid grid-cols-2 w-full h-full gap-2 overflow-hidden">
              <div className="w-full h-full rounded-md flex items-center justify-center relative overflow-hidden bg-neutral-500">
                <Image src={property.propertyImageList[2]} alt='property_image_3' priority className='object-cover' fill/>
              </div>
              <div className="w-full h-full rounded-md flex items-center justify-center overflow-hidden relative bg-neutral-500 cursor-pointer">
                <Image src={property.propertyImageList[3]} alt='property_image_4' priority className='object-cover' fill/>
                <ViewAllButton className='rounded-full' />
              </div>
            </div>
        </div>
      </div>
      <div className='my-4 flex justify-between items-start md:items-center flex-col md:flex-row'>
        <p className='lg:text-2xl text-xl mb-2 md:mb-0'>{property.propertTag === 'rent' ? 'Monthly Rent' : 'Price'}: <span className='text-yellow-400'>{nairaSign} {property.propertTag === 'rent' ? property.monthlyRent?.toLocaleString() : property.propertyCost?.toLocaleString()}.00</span></p>
        <div className="py-2.5 px-5 rounded-full bg-neutral-700 text-white flex w-fit gap-2 lg:gap-3 lg:text-lg items-center">
          <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.beds} beds</div>
          <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.baths} baths</div>
          <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.toilets} toilets</div>
          <div className=''>{property.propertySize} sqm</div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default ImageGallery