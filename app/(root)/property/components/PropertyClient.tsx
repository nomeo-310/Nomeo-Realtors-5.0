/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import TopHeader from './TopHeader'
import ImageGallery from './ImageGallery'
import PropertyDescription from './PropertyDescription'
import PropertyFeatures from './PropertyFeatures'
import AgentSection from './AgentSection'
import ImageSlider from './ImageSlider'
import { currentUserProps, featuredPropertiesProps } from '@/types/types'

type propertyClientProps = {
  property: featuredPropertiesProps
  currentUser: currentUserProps
}


const PropertyClient = ({property, currentUser}:propertyClientProps) => {

  const [openSlider, setOpenSlider] = React.useState(false);
  
  return (
    <React.Fragment>
      <Box className='pt-20'>
        <TopHeader property={property} currentUser={currentUser}/>
        <ImageGallery property={property} setOpenSlider={setOpenSlider}/>
        <hr/>
        <PropertyDescription description={property.description}/>
        <hr/>
        <div className="flex flex-col md:flex-row">
          <PropertyFeatures property={property} currentUser={currentUser}/>
          <AgentSection property={property} currentUser={currentUser}/>
        </div>
      </Box>
      { openSlider && <ImageSlider property={property} setOpenSlider={setOpenSlider}/> }
    </React.Fragment>
  )
}

export default PropertyClient;
