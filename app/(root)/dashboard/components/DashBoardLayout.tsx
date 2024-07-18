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
    <Box className='pt-24 lg:pt-28 flex md:gap-5 lg:gap-9 gap-3.5 min-h-screen'>
      <div className="sticky top-[78px] h-full lg:w-[22%] md:w-[32%] flex flex-col gap-2 w-[10.5%]">
        <DashBoardMenu agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <div className='lg:w-[78%] md:w-[68%] w-[89.5%]'>
        {children}
      </div>
    </Box>
  )
}

export default DashBoardLayout