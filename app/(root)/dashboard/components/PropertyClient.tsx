'use client'

import React from 'react'
import CreateProperty from './CreateProperty';
import { currentUserProps } from '@/types/types';
import AllAgentProperties from '../../profile/components/AllAgentProperties';

type propertyClientProps = {
  user: currentUserProps
}

const PropertyClient = ({user}:propertyClientProps) => {
  const [activeTab, setActiveTab] = React.useState('create-property');

  return (
    <React.Fragment>
      { activeTab === 'create-property' && <CreateProperty setActiveTab={setActiveTab} /> }
      { activeTab === 'all-properties' && 
        <div className='w-full min-h-[73.5vh] flex slide-in-left'>
          <div className="flex flex-col lg:gap-4 gap-3 w-full">
            <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>All Properties</h2>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('create-property')}>Create Property</h2>
            </div>
            <AllAgentProperties user={user} hideAgentInCharge useAsAllPost />
          </div>
        </div>
      }
    </React.Fragment>
  )
};

export default PropertyClient