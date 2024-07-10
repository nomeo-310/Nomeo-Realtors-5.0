'use client'

import React from 'react'
import CreateProperty from './CreateProperty';
import AllProperties from './AllProperties';
import { currentUserProps } from '@/types/types';

type propertyClientProps = {
  currentUser: currentUserProps
}

const PropertyClient = ({currentUser}:propertyClientProps) => {
  const [activeTab, setActiveTab] = React.useState('create-property');

  return (
    <>
      { activeTab === 'create-property' && <CreateProperty setActiveTab={setActiveTab} /> }
      { activeTab === 'all-properties' && <AllProperties setActiveTab={setActiveTab} currentUser={currentUser}/> }
    </>
  )
};

export default PropertyClient