'use client'

import React from 'react'
import PropertyCard from '@/components/shared/PropertyCard'
import { currentUserProps, featuredPropertiesProps } from '@/types/types'

type propsSection = {
  featuredProperties:featuredPropertiesProps[]
  currentUser: currentUserProps
}

const FeaturedProperties = ({featuredProperties, currentUser}:propsSection) => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 lg:mt-10 lg:gap-x-4 md:gap-x-3 gap-y-6 md:gap-y-8">
      {featuredProperties.map((property) => (
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
          liked={property.likes.includes(currentUser._id)}
          saved={property.bookmarks.includes(currentUser._id)}
          hideTag={false}
          agentDisplay={false}
        />
      ))}
    </div>
  )
}

export default FeaturedProperties