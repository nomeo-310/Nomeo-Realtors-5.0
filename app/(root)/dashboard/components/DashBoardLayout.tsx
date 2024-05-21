'use client'


import React from 'react'
import Box from '@/components/shared/Box'
import DashBoardMenu from './DashBoardMenu'

type layoutProps = {
  children: React.ReactNode
  agentLoggedIn: boolean
  activeTab:string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
};

const DashBoardLayout = ({children, agentLoggedIn, activeTab, setActiveTab}: layoutProps) => {

  return (
    <Box className='pt-24 lg:pt-28 flex md:gap-5 lg:gap-6 gap-3'>
      <div className="sticky top-[78px] h-full lg:w-[22%] md:w-[32%] flex flex-col md:gap-2 gap-3 w-fit">
        <DashBoardMenu agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <div className='lg:w-[78%] md:w-[68%]'>
        {children}
      </div>
    </Box>
  )
}

export default DashBoardLayout