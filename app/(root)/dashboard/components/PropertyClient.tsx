'use client'

import React from 'react'
import CreateProperty from './CreateProperty';
import { currentUserProps, featuredPropertiesProps } from '@/types/types';
import EmptyState from '@/components/shared/EmptyState';
import LoadMoreButton from '@/components/shared/LoadMoreButton';
import PropertyCard from '@/components/shared/PropertyCard';

type propertyClientProps = {
  user: currentUserProps
  properties: featuredPropertiesProps[]
}

const PropertyClient = ({properties, user}:propertyClientProps) => {
  const [activeTab, setActiveTab] = React.useState('create-property');

  return (
    <>
      { activeTab === 'create-property' && <CreateProperty setActiveTab={setActiveTab} /> }
      { activeTab === 'all-properties' && 
        <div className='w-full min-h-[73.5vh] flex slide-in-left'>
          <div className="flex flex-col lg:gap-4 gap-3 w-full">
            <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>All Properties</h2>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('create-property')}>Create Property</h2>
            </div>
            { properties.length < 1 ?
              <EmptyState message='You have no properties yet, create some'/> :
              <React.Fragment>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 md:gap-x-3 gap-y-6 md:gap-y-8">
                  { properties.map((property) => (
                    <PropertyCard key={property._id}
                      id={property._id}
                      propertTag={property.propertyTag}
                      furnitureTag={property.furnitureStatus}
                      propertyImage={property.images[0].secure_url}
                      propertySize={property.apartmentArea}
                      beds={property.bedNumber}
                      baths={property.bathNumber}
                      toilets={property.toiletNumber}
                      agentInCharge={property.agentInCharge.name}
                      agentInChargeImage={property.agentInCharge.image}
                      title={property.title}
                      state={property.state}
                      city={property.city}
                      propertyCost={property.fullPropertyPrice}
                      monthlyRent={property.monthlyRent}
                      liked={property.likes.includes(user._id)}
                      saved={property.bookmarks.includes(user._id)} 
                      hideTag={true}
                      agentDisplay
                      hideAgentInCharge={true}       
                    />
                  ))}
                </div>
                <LoadMoreButton loadmoreFunction={() => {}} label='Load more'/>
              </React.Fragment>
            }
          </div>
        </div>
      }
    </>
  )
};

export default PropertyClient