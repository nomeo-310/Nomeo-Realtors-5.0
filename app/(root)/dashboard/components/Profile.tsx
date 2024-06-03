import Input from '@/components/shared/Input';
import Image from 'next/image';
import React from 'react'
import { HiOutlineBriefcase, HiOutlineCreditCard, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone, HiOutlineSparkles, HiOutlineUser } from 'react-icons/hi2';
import TextArea from '@/components/shared/TextArea';

type currentUserProps = {
  image: string
  name: string
  email:string
  mobileNumber: string
  city: string
  state: string
  agencyName: string
  officeAddress: string
  officeNumber: string
  inspectionFee: number
  bio: string
  isAgent: boolean
}

type profileProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  user: currentUserProps
}

const Profile = ({setActiveTab, user}:profileProps) => {

  const nairaSign:string = String.fromCodePoint(8358);

  return (
    <div className='w-full h-full flex slide-in-left' id='profile'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full lg:w-[80%] xl:w-[70%]">
        <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Profile</h2>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('edit-profile')}>Edit Profile</h2>
        </div>
        <div className="flex lg:gap-4 gap-3 items-center">
          <div className='w-fit'>
            <div className="aspect-square md:w-40 w-[7.5rem] rounded overflow-hidden group bg-gray-200 flex items-center justify-center relative">
              <Image src={user.image ? user.image : '/images/default_user.png'} priority fill alt='profile_photo' className='object-cover'/>
            </div>
          </div>
          <div className="flex flex-col gap-3 grow">
            <Input
              type='text'
              icon={HiOutlineUser}
              disabled
              value={user.name}
            />
            <Input
              type='email'
              icon={HiOutlineEnvelope}
              disabled
              value={user.email}
            />
          </div>
        </div>
        <hr/>
        <React.Fragment>
          <h2 className='text-xl lg:text-2xl mb-4'>Personal Details</h2>
          <Input
            type='text'
            value={`Mobile Number: ${user.mobileNumber}`}
            disabled
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <Input
              type='text'
              value={`Current City: ${user.city}`}
              disabled
            />
            <Input
              type='text'
              value={`Current State: ${user.state}`}
              disabled
            />
          </div>
        </React.Fragment>
        <hr/>
        {user.isAgent &&
          <React.Fragment>
            <h2 className='text-xl lg:text-2xl mb-4'>Agent & Agency Details</h2>
            <Input
              type='text'
              value={`Name Of Agency: ${user.agencyName}`}
              disabled
            />
            <Input
              type='text'
              value={`Office Address: ${user.officeAddress}`}
              disabled
            />
            <Input
              type='text'
              value={`Office Number: ${user.officeNumber}`}
              disabled
            />
            <Input
              type='text'
              value={`Inspection Fee: ${nairaSign}${user.inspectionFee.toLocaleString()} per hour`}
              disabled
            />
            <hr/>
          </React.Fragment>
        }
        <React.Fragment>
          <h2 className='text-xl lg:text-2xl mb-4'>Personal Bio</h2>
          <TextArea
            value={user.bio ? `Bio: ${user.bio}` : 'Bio: Nothing to see here yet.'}
            disabled
          />
        </React.Fragment>
        
      </div>
    </div>
  )
};

export default Profile;