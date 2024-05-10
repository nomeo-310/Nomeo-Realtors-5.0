'use client'

import { propertyProps } from '@/components/data/constants';
import React from 'react'

const PropertyFeatures = ({property}:{property:propertyProps}) => {
  const nairaSign:string = String.fromCodePoint(8358);

  return (
    <div className="md:w-[50%] lg:w-[55%] w-full md:pr-4">
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Verified Amenities</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.verifiedamenities.map((item:string, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item}</p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Main Fees</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.mainFees.map((item:{name:string, amount:number}, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.name}:{' '} {nairaSign}{item.amount.toLocaleString()}.00</p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Optional Fees</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.optionalFees.map((item:{name:string, amount:number}, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.name}:{' '} {nairaSign}{item.amount.toLocaleString()}.00</p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Nearby Places</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.nearbyPlaces.map((item:{name:string, distance:string}, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.name}: {item.distance} <span className='lowercase'>away</span></p>
          ))}
        </div>
      </div>
      <hr className='md:hidden'/>
    </div>
  )
};

export default PropertyFeatures
