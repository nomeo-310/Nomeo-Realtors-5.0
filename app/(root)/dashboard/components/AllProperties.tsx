import React from 'react'
import AllRentProperties from '../../rent/components/AllRentProperties'
import { propertyList } from '@/components/data/constants'

type Props = {}

const AllProperties = ({setActiveTab}:{setActiveTab: React.Dispatch<React.SetStateAction<string>>}) => {
  const properties = propertyList.filter((property) => property.agentInCharge === 'Afolabi Ishola')
  return (
    <div className='w-full min-h-[73.5vh] flex slide-in-left'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full">
        <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>All Properties</h2>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('create-property')}>Create Property</h2>
        </div>
        <AllRentProperties propertyList={properties} useAgent={true}/>
      </div>
    </div>
  )
}

export default AllProperties