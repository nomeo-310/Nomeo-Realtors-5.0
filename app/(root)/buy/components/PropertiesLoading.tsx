'use client'

import React from 'react'
import PropertyLoadingSkeleton from '../../property/components/PropertyLoadingSkeleton'


const PropertiesLoading = () => {
  return (
      <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        <PropertyLoadingSkeleton/>
        <PropertyLoadingSkeleton/>
        <PropertyLoadingSkeleton/>
        <PropertyLoadingSkeleton/>
        <PropertyLoadingSkeleton/>
        <PropertyLoadingSkeleton/>
      </div>
  )
}

export default PropertiesLoading