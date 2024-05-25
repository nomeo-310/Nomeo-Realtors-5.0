'use client'

import React from 'react'
import RentApartmentTab from './RentApartmentTab';
import BuyApartmentTab from './BuyApartmentTab';

const HomePageSearchBar = () => {

  const [activeTab, setActiveTab] = React.useState('rent')

  const handleSelectTab = (tabItem:string) => {
    setActiveTab(tabItem)
  };

  const TabSelectButton = () => {
    return (
      <div className="flex">
        <button className={`text-sm uppercase py-3.5 md:py-4 px-10 lg:px-14 rounded-tl-md ${activeTab === 'rent' ? 'bg-white/60' : 'bg-white'}`} onClick={() => handleSelectTab('rent')}>
          rent
        </button>
        <button className={`text-sm uppercase py-3.5 md:py-4 px-10 lg:px-14 rounded-tr-md ${activeTab === 'buy' ? 'bg-white/60' : 'bg-white'}`} onClick={() => handleSelectTab('buy')}>
          buy
        </button>
      </div>
    )
  };


  return (
    <div className='w-full'>
      <TabSelectButton />
      { activeTab === 'rent' ? <RentApartmentTab/> : <BuyApartmentTab/> }
    </div>
  )
}

export default HomePageSearchBar;