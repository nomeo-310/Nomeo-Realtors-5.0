'use client'

import React from 'react'

const PropertyDescription = ({description}:{description:string}) => {
  return (
    <React.Fragment>
      <div className="my-4">
        <h2 className='text-xl lg:text-2xl'>Property Overview</h2>
        <p className='mt-3 lg:text-lg'>{description}</p>
      </div>
    </React.Fragment>
  )
};

export default PropertyDescription