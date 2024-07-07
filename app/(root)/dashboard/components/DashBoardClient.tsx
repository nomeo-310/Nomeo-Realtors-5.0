'use client'


import React from 'react'
import DashBoardLayout from './DashBoardLayout';
import Notifications from './Notifications';
import LikedProperties from './LikedProperties';
import SavedProperties from './SavedProperties';
import ChangePassword from './ChangePassword';
import PropertyClient from './PropertyClient';
import ProfileClient from './ProfileClient';
import PostClient from './PostClient';
import { currentUserProps } from '@/types/types';


type dashboardProps = {
  currentUser: currentUserProps
}

const DashBoardClient = ({currentUser}: dashboardProps) => {
  const agentLoggedIn = currentUser.isAgent

  const [activeTab, setActiveTab] = React.useState(agentLoggedIn ? 'property': 'notifications');
  
  return (
    <DashBoardLayout agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}>
      { activeTab === 'property' && <PropertyClient /> }
      { activeTab === 'post' && <PostClient /> }
      { activeTab === 'notifications' && <Notifications /> }
      { activeTab === 'likes' && <LikedProperties /> }
      { activeTab === 'saves' && <SavedProperties /> }
      { activeTab === 'profile' && <ProfileClient /> }
      { activeTab === 'password' && <ChangePassword/> }
    </DashBoardLayout>
  )
};

export default DashBoardClient;