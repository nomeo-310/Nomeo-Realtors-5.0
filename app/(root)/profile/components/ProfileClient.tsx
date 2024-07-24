'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import { blogList, nairaSign, user_2 } from '@/components/data/constants'
import Image from 'next/image'
import { HiOutlineBriefcase, HiOutlineCheckBadge, HiOutlineDocumentText, HiOutlineEnvelope, HiOutlineHome, HiOutlineLink, HiOutlineMapPin, HiOutlinePhone, HiOutlineReceiptPercent, HiOutlineStar, HiOutlineUser, HiOutlineUserGroup, HiOutlineWallet } from 'react-icons/hi2'
import AllBlogs from '../../blogs/components/AllBlogs'
import LoadMoreButton from '@/components/shared/LoadMoreButton'
import { currentUserProps, featuredPropertiesProps } from '@/types/types'
import PropertiesContent from './PropertiesContent'
import { formatDate } from '@/hooks/formatTime'


type profileClientProps = {
  user: currentUserProps
  properties: featuredPropertiesProps[]
}

const ProfileClient = ({user, properties}:profileClientProps) => {
  const [mobileActiveTab, setMobileActiveTab] = React.useState('profile');
  const [activeTab, setActiveTab] = React.useState('posts');

  const ProfileContent = () => {

    return (
      <div className="flex flex-col gap-3">
        <div className="flex lg:gap-4 gap-3 items-center">
          <div className='w-fit'>
            <div className="aspect-square lg:w-28 w-[6rem] rounded overflow-hidden group bg-gray-200 flex items-center justify-center relative">
              <Image src={user.image ? user.image : '/images/default_user.png'} priority fill alt='profile_photo' className='object-cover'/>
            </div>
          </div>
          <div className="flex flex-col text-gray-400 gap-1 lg:gap-2">
            <div className="flex items-center gap-2">
              <HiOutlineUser size={22}/>
              <p className='lg:text-lg'>{user.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineEnvelope size={22}/>
              <p className='lg:text-lg line-clamp-1'>{user.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMapPin size={22}/>
              <p className='lg:text-lg'>{user.city}, {user.state}</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1 lg:gap-2 w-full overflow-hidden'>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineBriefcase size={22}/>
            <p className='lg:text-lg'>{user.agencyName}</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineCheckBadge size={22}/>
            <p className='lg:text-lg'>Verified</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineMapPin size={22}/>
            <p className='lg:text-lg line-clamp-1'>{user.agencyAddress}</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlinePhone size={22}/>
            <p className='lg:text-lg'>{user_2.mobileNumber}, {user_2.officeNumber}</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineWallet size={22}/>
            <p className='lg:text-lg'>{nairaSign}{user.agencyFee.toLocaleString()} per hour</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineUserGroup size={22}/>
            <p className='lg:text-lg'>45 Happy clients</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineDocumentText size={22}/>
            <p className='lg:text-lg'>20 Blogposts</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineReceiptPercent size={22}/>
            <p className='lg:text-lg'>125  Sales</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineHome size={22}/>
            <p className='lg:text-lg'>128 Well managed properties</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineLink size={22}/>
            <p className='lg:text-lg'>https://www.balticrealtorsinc.com</p>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineStar size={22}/>
            <p className='lg:text-lg'>4.5 / 5</p>
          </div>
        </div>
        <hr/>
        <p className='lg:text-lg text-gray-400'>{user.agentBio}</p>
        <p className='lg:text-lg text-gray-400 mt-4'>Joined: {formatDate(user.createdAt)}</p>
      </div>
    );
  };

  const PostContent = () => {
    return (
      <React.Fragment>
        <AllBlogs blogList={blogList} useAsAllPost />
        <LoadMoreButton label="Load more" loadmoreFunction={() => {}}/>
      </React.Fragment>
    )
  };

  return (
    <Box className='pt-20 lg:pt-24 flex w-full gap-4'>
      <div className="lg:w-[35%] md:w-[43%] h-full w-full sticky top-[78px]">
        <div>
          <h2 className='md:mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold hidden md:block'>Profile</h2>
          <div className='flex w-full md:mb-8 lg:gap-6 gap-4 cursor-pointer md:hidden'>
            <h2 className='mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold hidden md:block'>Profile</h2>
            <h2 className={`${mobileActiveTab === 'profile' ? 'text-black': 'text-gray-400'} text-2xl md:text-3xl lg:text-4xl font-semibold mb-8`} onClick={() =>setMobileActiveTab('profile')}>Profile</h2>
            <h2 className={`${mobileActiveTab === 'posts' ? 'text-black': 'text-gray-400'} text-2xl md:text-3xl lg:text-4xl font-semibold mb-8`} onClick={() =>setMobileActiveTab('posts')}>Posts</h2>
            <h2 className={`${mobileActiveTab === 'properties' ? 'text-black': 'text-gray-400'} text-2xl md:text-3xl lg:text-4xl font-semibold mb-8`} onClick={() =>setMobileActiveTab('properties')}>Properties</h2>
          </div>
          <div className="hidden md:block">
            <ProfileContent/>
          </div>
          <div className='md:hidden'>
            { mobileActiveTab === 'profile' && <ProfileContent/> }
            { mobileActiveTab === 'posts' && <PostContent/> }
            { mobileActiveTab === 'properties' && <PropertiesContent properties={properties} user={user}/> }
          </div>

        </div>
      </div>
      <div className="lg:w-[65%] md:w-[57%] h-full hidden md:block">
        <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
          <h2 className={`${activeTab === 'posts' ? 'text-black': 'text-gray-400'} text-2xl md:text-3xl lg:text-4xl font-semibold`} onClick={() =>setActiveTab('posts')}>Posts</h2>
          <h2 className={`${activeTab === 'properties' ? 'text-black': 'text-gray-400'}  text-2xl md:text-3xl lg:text-4xl font-semibold`} onClick={() => setActiveTab('properties')}>Properties</h2>
        </div>
        <div>
          { activeTab === 'posts' && <PostContent/> }
          { activeTab === 'properties' && <PropertiesContent properties={properties} user={user} /> }
        </div>
      </div>
    </Box>
  )
}

export default ProfileClient;