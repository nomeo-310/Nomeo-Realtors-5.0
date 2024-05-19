import React from 'react'
import PropertyCard from '@/components/shared/PropertyCard'
import { propertyProps } from '@/components/data/constants'
import LoadMoreButton from '@/components/shared/LoadMoreButton'

type Props = Omit<propertyProps, 'mainFees'| 'optionalFees' | 'intro' | 'description'| 'verifiedamenities' | 'propertyImageList' | 'nearbyPlaces' >

type allbuyProps = {
  propertyList: Props[]
}
const AllBuyingProperties = ({propertyList}: allbuyProps) => {
  return (
    <React.Fragment>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 md:gap-x-3 gap-y-6 md:gap-y-8">
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
            hideTag={true}        
          />
        ))}
      </div>
      <LoadMoreButton loadmoreFunction={() => {}} />
    </React.Fragment>
  )
}

export default AllBuyingProperties