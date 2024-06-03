'use client'

import React from 'react'
import CreateProperty from './CreateProperty';
import AllProperties from './AllProperties';

type Props = {}

const PropertyClient = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState('create-property');

  return (
    <>
      { activeTab === 'create-property' && <CreateProperty setActiveTab={setActiveTab} /> }
      { activeTab === 'all-properties' && <AllProperties setActiveTab={setActiveTab} /> }
    </>
  )
};

export default PropertyClient