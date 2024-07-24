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
import { currentUserProps, featuredBlogProps, featuredPropertiesProps } from '@/types/types';


type dashboardProps = {
  currentUser: currentUserProps
  properties: featuredPropertiesProps[]
  blogs: featuredBlogProps[]
}

const DashBoardClient = ({currentUser, properties, blogs}: dashboardProps) => {
  const agentLoggedIn = currentUser && currentUser.isAgent

  const [activeTab, setActiveTab] = React.useState(agentLoggedIn ? 'property': 'notifications');
  
  return (
    <DashBoardLayout agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}>
      { activeTab === 'property' && <PropertyClient user={currentUser} properties={properties}/> }
      { activeTab === 'post' && <PostClient blogs={blogs}/> }
      { activeTab === 'notifications' && <Notifications /> }
      { activeTab === 'likes' && <LikedProperties /> }
      { activeTab === 'saves' && <SavedProperties /> }
      { activeTab === 'profile' && <ProfileClient currentUser={currentUser} /> }
      { activeTab === 'password' && <ChangePassword/> }
    </DashBoardLayout>
  )
};

export default DashBoardClient;