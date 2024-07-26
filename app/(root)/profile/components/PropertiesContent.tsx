'use client'
import React from "react";
import LoadMoreButton from "@/components/shared/LoadMoreButton";
import { currentUserProps, featuredPropertiesProps } from "@/types/types";
import PropertyCard from "@/components/shared/PropertyCard";
import EmptyState from "@/components/shared/EmptyState";


type propertiesContentProps = {
  properties: featuredPropertiesProps[]
  user: currentUserProps
};


const PropertiesContent = ({user, properties}:propertiesContentProps) => {
  return (
    <React.Fragment>
      { properties.length < 1 ? 
        <EmptyState message="Agent has no properties yet"/> : 
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
                agentDisplay={false}
                hideAgentInCharge={true}       
              />
            ))}
          </div>
          <LoadMoreButton loadmoreFunction={() => {}} label='Load more'/>
        </React.Fragment>
      }
    </React.Fragment>
  )
};

export default PropertiesContent;