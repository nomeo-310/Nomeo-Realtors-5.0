'use client'

import React from 'react'
import ImageAvatar from '@/components/shared/ImageAvatar';
import { currentUserProps, featuredPropertiesProps } from '@/types/types';
import { useRouter } from 'next/navigation';
import useLogin from '@/hooks/useLogin';

type propertyFeatureProp = {
  property:featuredPropertiesProps
  currentUser: currentUserProps
}

const PropertyFeatures = ({property, currentUser}:propertyFeatureProp) => {
  const nairaSign:string = String.fromCodePoint(8358);

  const router = useRouter();
  const loginUser = useLogin();

  const checkoutProfile = () => {

    if (!currentUser) {
      loginUser.onOpen();
      return;
    }

    router.push(`/profile/${property.agentInCharge._id}`);
  }

  return (
    <div className="md:w-[50%] lg:w-[55%] w-full md:pr-4">
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Verified Amenities</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.verifiableAmenities.map((item:string, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item}</p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Main Fees</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.mainFees.map((item, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.mainFeeName}:{' '} {nairaSign}{item.mainFeeAmount.toLocaleString()}.00</p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Optional Fees</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.optionalFees.map((item, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.optFeeName}:{' '} {nairaSign}{item.optFeeAmount.toLocaleString()}.00</p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Nearby Places</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {property.closestLandmark.map((item, index:number) => (
            <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.landmarkName}: {item.distance} <span className='lowercase'>away</span></p>
          ))}
        </div>
      </div>
      <hr/>
      <div className="my-4 w-full">
        <h2 className='text-xl lg:text-2xl'>Agent in Charge</h2>
        <div className="flex mt-3 gap-3 ">
          <div className={`w-fit`}>
            <ImageAvatar className={`md:w-20 md:h-20 w-16 h-16 rounded bg-gray-200 overflow-hidden ${property.agentInCharge.image === '' && 'border'}`} src={property.agentInCharge.image}/>
          </div>
          <div className='w-full'>
            <p>Name: {property.agentInCharge.name}</p>
            <p>Agency: {property.agentInCharge.agencyName}</p>
            <div className='w-full mt-3'>
              <div>
                <button className='underline' onClick={checkoutProfile}>Checkout profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PropertyFeatures
