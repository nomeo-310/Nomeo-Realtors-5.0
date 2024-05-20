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
          <hr/>
        </React.Fragment>
      }
      { mainItemList.map((item, index:number) => (
        <React.Fragment key={index}>
          <DashboardMenuItem
            setActiveTab={setActiveTab}
            label={item.label}
            icon={item.icon}
            active={activeTab === item.label}
          />
          {index === 1 ? <hr/> : index === 3 ? <hr/> : ''}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default DashBoardMenu