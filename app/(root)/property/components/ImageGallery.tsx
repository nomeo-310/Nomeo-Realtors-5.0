'use client'

import { propertyProps } from '@/components/data/constants';
import { featuredPropertiesProps } from '@/types/types';
import Image from 'next/image';
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';


const ImageGallery = ({property,  setOpenSlider}:{property:featuredPropertiesProps, setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const nairaSign:string = String.fromCodePoint(8358);

  const ViewAllButton = ({className}:{className?:string}) => {
    return (
      <button className={twMerge("absolute right-3 bottom-3  bg-white py-2 pl-3 pr-1 rounded flex items-center", className)} onClick={() => setOpenSlider(true)}>
        <h2 className='text-sm lg:text-base'>View all {property.images.length} photos</h2>
        <div>
          <HiChevronRight size={22}/>
        </div>
      </button>
    )
  };

  return (
    <React.Fragment>
      <div className='w-full rounded overflow-hidden xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[20rem] grid md:grid-cols-2 gap-2 grid-cols-1'>
        <div className="w-full h-full rounded flex justify-center items-center relative overflow-hidden bg-gray-300">
          <Image src={property.images[0].secure_url} alt='property_image_1' priority className='object-cover' fill/>
          <ViewAllButton  className='md:hidden'/>
        </div>
        <div className="w-full h-full md:grid grid-rows-2 overflow-hidden gap-2 hidden">
            <div className="w-full flex h-full justify-center items-center rounded relative overflow-hidden bg-gray-300">
              <Image src={property.images[1].secure_url} alt='property_image_2' priority className='object-cover' fill/>
            </div>
            <div className="grid grid-cols-2 w-full h-full gap-2 overflow-hidden">
              <div className="w-full h-full rounded flex items-center justify-center relative overflow-hidden bg-gray-3000">
                <Image src={property.images[2].secure_url} alt='property_image_3' priority className='object-cover' fill/>
              </div>
              <div className="w-full h-full rounded flex items-center justify-center overflow-hidden relative bg-gray-300 cursor-pointer">
                <Image src={property.images[3].secure_url} alt='property_image_4' priority className='object-cover' fill/>
                <ViewAllButton />
              </div>
            </div>
        </div>
      </div>
      <div className='my-4 flex justify-between items-start md:items-center flex-col md:flex-row'>
        <p className='lg:text-2xl text-xl mb-2 md:mb-0'>{property.propertyTag === 'rent' ? 'Monthly Rent' : 'Price'}: <span className='text-yellow-400'>{nairaSign} {property.propertyTag === 'rent' ? property.monthlyRent?.toLocaleString() : property.fullPropertyPrice?.toLocaleString()}.00</span></p>
        <div className="py-2.5 px-5 rounded bg-neutral-700 text-white flex w-fit gap-2 lg:gap-3 lg:text-lg items-center">
          <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.bedNumber} beds</div>
          <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.bathNumber} baths</div>
          <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.toiletNumber} toilets</div>
          <div className=''>{property.apartmentArea} sqm</div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default ImageGallery
