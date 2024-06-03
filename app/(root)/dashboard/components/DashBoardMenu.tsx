'use client'

import React from 'react'
import DashboardMenuItem from './DashboardMenuItem'
import { agentMenuList, mainItemList } from '@/components/data/constants'

type menuProps = {
  agentLoggedIn:boolean
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const DashBoardMenu = ({agentLoggedIn, activeTab, setActiveTab}: menuProps) => {
  let list;

  { agentLoggedIn ? 
    list = mainItemList.filter((item) => item.label !== 'saves').filter((item) => item.label !== 'likes'):
    list = mainItemList
  }
  
  return (
    <React.Fragment>
      { agentLoggedIn &&
        <React.Fragment>
          {agentMenuList.map((item, index:number) => (
            <DashboardMenuItem
              key={index}
              setActiveTab={setActiveTab}
              label={item.label}
              icon={item.icon}
              active={activeTab === item.label}
            />
          ))}
        </React.Fragment>
      }
      { list.map((item, index:number) => (
        <React.Fragment key={index}>
          <DashboardMenuItem
            setActiveTab={setActiveTab}
            label={item.label}
            icon={item.icon}
            active={activeTab === item.label}
          />
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default DashBoardMenu