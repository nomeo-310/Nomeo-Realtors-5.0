import React from 'react'
import Profile from './Profile';
import EditProfile from './EditProfile';
import { user, user_2 } from '@/components/data/constants';

type Props = {}

const ProfileClient = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState('profile');

  return (
    <div className='w-full h-full'>
      { activeTab === 'profile' && <Profile setActiveTab={setActiveTab} user={user_2}/> }
      { activeTab === 'edit-profile' && <EditProfile setActiveTab={setActiveTab} user={user_2}/> }
    </div>
  )
}

export default ProfileClient