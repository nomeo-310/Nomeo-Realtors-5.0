'use client'


import React from 'react'
import { IconType } from 'react-icons/lib';

type menuProps = {
  label:string, 
  icon:IconType, 
  active:boolean, 
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const DashboardMenuItem = ({label, icon:Icon, active, setActiveTab}:menuProps) => {
  const activeStyle = 'bg-gray-200 md:border-l-4 md:rounded-r hover:md:border-l-4 md:border-black rounded md:rounded-l-none'
  return (
    <div className={`${active ? activeStyle : 'rounded'} md:p-4 p-2.5  md:flex md:gap-3 items-center cursor-pointer hover:bg-gray-200 hover:border-l-0`} onClick={() => setActiveTab(label)}>
      <Icon size={28} className='md:block hidden'/>
      <Icon size={24} className='md:hidden'/> 
      <h2 className='text-lg md:block hidden capitalize'>{label}</h2>
    </div>
  )
};

export default DashboardMenuItem