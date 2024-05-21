'use client'


import React from 'react'
import DashBoardLayout from './DashBoardLayout';
import CreateProperty from './CreateProperty';
import CreatePost from './CreatePost';
import Notifications from './Notifications';
import Messages from './Messages';
import LikedProperties from './LikedProperties';
import SavedProperties from './SavedProperties';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';


type Props = {}

const DashBoardClient = (props: Props) => {
  const agentLoggedIn = true;

  const [activeTab, setActiveTab] = React.useState(agentLoggedIn ? 'property': 'notifications');
  
  return (
    <DashBoardLayout agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}>
      { activeTab === 'property' && <CreateProperty/> }
      { activeTab === 'post' && <CreatePost/> }
      { activeTab === 'notifications' && <Notifications/> }
      { activeTab === 'messages' && <Messages/> }
      { activeTab === 'likes' && <LikedProperties/> }
      { activeTab === 'saves' && <SavedProperties/> }
      { activeTab === 'profile' && <EditProfile/> }
      { activeTab === 'password' && <ChangePassword/> }
    </DashBoardLayout>
  )
};

export default DashBoardClient;