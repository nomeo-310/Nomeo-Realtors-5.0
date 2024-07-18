'use client'


import React from 'react'
import Box from '@/components/shared/Box'
import Header from './Header'
import { currentUserProps, featuredPropertiesProps } from '@/types/types'
import PropertyCard from '@/components/shared/PropertyCard'

type propsSection = {
  featuredProperties: featuredPropertiesProps[]
  currentUser: currentUserProps
}

const FeaturedPropertiesSection = ({featuredProperties, currentUser}:propsSection) => {

  return (
    <Box className='pb-0 lg:pb-0 lg:pt-20 pt-16' id='featuredProperties'>
      <Header
        mainTitle='Featured Properties'
        subTitle="Browse our featured listings below to get a glimpse of what we offer.  From modern apartments in desirable neighborhoods to luxurious homes with stunning amenities, we're confident you'll find a property that captures your heart."
      />
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
            city={property.city}
            state={property.state}
            propertyCost={property.fullPropertyPrice}
            monthlyRent={property.monthlyRent}
            liked={property.likes.includes(currentUser?._id)}
            saved={property.bookmarks.includes(currentUser?._id)}
            hideTag={false}
            agentDisplay={false}
          />
        ))}
      </div>
    </Box>
  )
}

export default FeaturedPropertiesSection