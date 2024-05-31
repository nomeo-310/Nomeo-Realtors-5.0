'use client'

import React from 'react'
import CreateProperty from './CreateProperty';
import AllProperties from './AllProperties';

type Props = {}

const PropertyClient = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState('create-property');

  return (
    <div className='w-full h-full'>
      { activeTab === 'create-property' && <CreateProperty setActiveTab={setActiveTab} /> }
      { activeTab === 'all-properties' && <AllProperties setActiveTab={setActiveTab} /> }
    </div>
  )
};

export default PropertyClient