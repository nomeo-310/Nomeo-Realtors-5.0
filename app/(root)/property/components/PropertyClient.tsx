'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { propertyList } from '@/components/data/constants'
import Image from 'next/image'



const PropertyClient = () => {

  const property = propertyList[0];

  return (
    <Box className='pt-20'>
      <div className='lg:mb-5 mb-4'>
        <h2 className='lg:text-4xl text-3xl mb-2'>{property.title}</h2>
        <div className='flex items-center gap-2'>
          <HiOutlineMapPin size={24}/>
          <p className='lg:text-lg'>{property.location}</p>
        </div>
      </div>
      <div className='w-full rounded overflow-hidden lg:h-[500px] max-md: md:h-[400px] h-[350px] grid md:grid-cols-2 gap-2 grid-cols-1'>
         <div className="w-full h-full rounded-md flex justify-center items-center relative overflow-hidden bg-neutral-500">
          <Image src={property.propertyImageList?.[0] || ''} alt='property_image_1' priority className='object-cover' fill/>
         </div>
         <div className="w-full h-full md:grid grid-rows-2 overflow-hidden gap-2 hidden">
            <div className="w-full flex h-full justify-center items-center rounded-md relative overflow-hidden bg-neutral-500">
              <Image src={property.propertyImageList?.[1] || ''} alt='property_image_2' priority className='object-cover' fill/>
            </div>
            <div className="grid grid-cols-2 w-full h-full gap-2 overflow-hidden">
              <div className="w-full h-full rounded-md flex items-center justify-center relative overflow-hidden bg-neutral-500">
                <Image src={property.propertyImageList?.[2] || ''} alt='property_image_3' priority className='object-cover' fill/>
              </div>
              <div className="w-full h-full rounded-md flex items-center justify-center overflow-hidden relative bg-neutral-500">
                <Image src={property.propertyImageList?.[3] || ''} alt='property_image_4' priority className='object-cover' fill/>
              </div>
            </div>
         </div>
      </div>
    </Box>
  )
}

export default PropertyClient
