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
  const agentLoggedIn = currentUser && currentUser.isAgent

  const [activeTab, setActiveTab] = React.useState(agentLoggedIn ? 'property': 'notifications');
  
  return (
    <DashBoardLayout agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}>
      { activeTab === 'property' && <PropertyClient currentUser={currentUser}/> }
      { activeTab === 'post' && <PostClient currentUser={currentUser} /> }
      { activeTab === 'notifications' && <Notifications /> }
      { activeTab === 'likes' && <LikedProperties /> }
      { activeTab === 'saves' && <SavedProperties /> }
      { activeTab === 'profile' && <ProfileClient currentUser={currentUser} /> }
      { activeTab === 'password' && <ChangePassword/> }
    </DashBoardLayout>
  )
};

export default DashBoardClient;