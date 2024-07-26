import React from 'react'
import PropertyCard from '@/components/shared/PropertyCard'
import { propertyProps } from '@/components/data/constants'
import LoadMoreButton from '@/components/shared/LoadMoreButton'
import { currentUserProps, featuredPropertiesProps } from '@/types/types'

type Props = Omit<propertyProps, 'mainFees'| 'optionalFees' | 'intro' | 'description'| 'verifiedamenities' | 'propertyImageList' | 'nearbyPlaces' >

type allRentProps = {
  propertyList: featuredPropertiesProps[]
  currentUser: currentUserProps

}
const AllRentProperties = ({propertyList, currentUser}: allRentProps) => {
  return (
    <React.Fragment>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 md:gap-x-3 gap-y-6 md:gap-y-8">
        {propertyList.map((property) => (
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
          hideTag={true}
          agentDisplay={false}     
          />
        ))}
      </div>
      <LoadMoreButton loadmoreFunction={() => {}} label='Load more'/>
    </React.Fragment>
  )
}

export default AllRentProperties