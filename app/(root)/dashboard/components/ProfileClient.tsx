import React from 'react'
import Profile from './Profile';
import EditProfile from './EditProfile';

type Props = {}

const ProfileClient = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState('profile');

  return (
    <div className='w-full h-full'>
      { activeTab === 'profile' && <Profile setActiveTab={setActiveTab} /> }
      { activeTab === 'edit-profile' && <EditProfile setActiveTab={setActiveTab} /> }
    </div>
  )
}

export default ProfileClient