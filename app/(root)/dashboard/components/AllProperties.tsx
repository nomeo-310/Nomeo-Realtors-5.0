import React from 'react'
import AllRentProperties from '../../rent/components/AllRentProperties'
import { propertyList } from '@/components/data/constants'
import { currentUserProps } from '@/types/types'
import EmptyState from '@/components/shared/EmptyState'

type allPropertiesProps = {
  currentUser: currentUserProps
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const AllProperties = ({setActiveTab, currentUser}:allPropertiesProps) => {

  return (
    <div className='w-full min-h-[73.5vh] flex slide-in-left'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full">
        <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>All Properties</h2>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('create-property')}>Create Property</h2>
        </div>
        { currentUser.properties.length < 1 &&
          <EmptyState message='You have no properties yet, create some'/>  
        }
        {/* <AllRentProperties propertyList={currentUser.properties} useAgent={true}/> */}
      </div>
    </div>
  )
}

export default AllProperties