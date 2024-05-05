'use client'

import React from 'react'
import { propertyList } from '@/components/data/constants'
import PropertyCard from '@/components/shared/PropertyCard'

const FeaturedProperties = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 lg:mt-10 lg:gap-x-4 md:gap-x-3 gap-y-6 md:gap-y-8">
      {propertyList.map((property) => (
        <PropertyCard key={property.id}
          id={property.id}
          propertTag={property.propertTag}
          furnitureTag={property.furnitureTag}
          propertyImage={property.propertyImage}
          propertySize={property.propertySize}
          beds={property.beds}
          baths={property.baths}
          toilets={property.toilets}
          agentInCharge={property.agentInCharge}
          agentInChargeImage={property.agentInChargeImage}
          title={property.title} 
          location={property.location}
          propertyCost={property.propertyCost}
          monthlyRent={property.monthlyRent}
          liked={property.liked}
          saved={property.saved}
        />
      ))}
    </div>
  )
}

export default FeaturedProperties