'use client'

import React from 'react'
import { formatTargetDate, useCountdownTimer } from '@/hooks/countdownTimer'
import Link from 'next/link'
import ImageAvatar from '@/components/shared/ImageAvatar'

type paymentCardNotificationProps = {
  client: string 
  paidDate: string 
  propertyTag: string
  isAgent: boolean
}

type notificationCardProps = {
  user:string
  propertyId: string
}

const Notifications = () => {

  const PaymentNotificationCard = ({client, paidDate, propertyTag, isAgent}:paymentCardNotificationProps) => {

    const futureDate = formatTargetDate(paidDate);
    const { days, hours, minutes, seconds } = useCountdownTimer(futureDate.toISOString());

    return (
      <div className="w-full bg-gray-200 rounded lg:p-4 p-3 flex gap-2 flex-col relative overflow-hidden">
        <div className="md:text-lg w-fit">{isAgent ? `${client}'s` : 'Your'} next {propertyTag === 'rent' ?  'rent' : 'annual mortgage'} is due in:</div>
        <div className="grow">
          <span className='lg:text-4xl md:text-3xl text-xl font-bold'>{days} days : {hours} hours : {minutes} mins : {seconds} secs</span>
        </div>
        <div className='flex items-center justify-end mt-1'>
          <button className='text-neutral-600 hover:underline'>
            send reminder mail
          </button>
        </div>
      </div>
    )
  };

  const NotificationCard = ({user, propertyId }:notificationCardProps) => {
    const [showUserDetails, setShowUserDetails] = React.useState(false);

    return (
      <div className="w-full bg-gray-200 rounded lg:p-4 p-3 flex gap-2 flex-col">
        <div className="md:text-lg w-fit">
          {user} showed interest in one of your <Link href={`/property/${propertyId}`} className='underline cursor-pointer'>property</Link>.
        </div>
        { showUserDetails &&
          <React.Fragment>
            <hr className='border border-black'/>
            <div className='flex gap-2 lg:gap-3 flex-row'>
              <ImageAvatar className='w-20 h-20 md:w-24 md:h-24'/>
              <div className=''>
                <p className='md:text-lg'>Fullname: Oladotun James</p>
                <p className='md:text-lg'>Email: onomesalomi@gmail.com</p>
                <p className='md:text-lg'>Phone: 0803456785412</p>
              </div>
            </div> 
          </React.Fragment> }
        <div className='flex items-center justify-between mt-1 gap-5'>
          <button className='text-neutral-600 hover:underline' onClick={() => setShowUserDetails(prevState => !prevState)}>
            {showUserDetails ? 'hide details of user' : 'show details of user'}
          </button>
          <button className='text-neutral-600 hover:underline'>
            dismiss notification
          </button>
        </div>
      </div>
    )
  };

  const InspectionNotificationCard = ({user, propertyId }:notificationCardProps) => {
    const [showUserDetails, setShowUserDetails] = React.useState(false);

    return (
      <div className="w-full bg-gray-200 rounded lg:p-4 p-3 flex gap-2 flex-col">
        <div className="md:text-lg w-fit">
          {user} scheduled to inspect your <Link href={`/property/${propertyId}`} className='underline cursor-pointer'>property</Link> on 20 June 2024 by 5PM.
        </div>
        { showUserDetails &&
          <React.Fragment>
            <hr className='border border-black'/>
            <div className='flex gap-2 lg:gap-3 flex-row'>
              <ImageAvatar className='w-20 h-20 md:w-24 md:h-24'/>
              <div className=''>
                <p className='md:text-lg'>Fullname: Oladotun James</p>
                <p className='md:text-lg'>Email: onomesalomi@gmail.com</p>
                <p className='md:text-lg'>Phone: 0803456785412</p>
              </div>
            </div> 
          </React.Fragment> }
        <div className='flex items-center justify-between mt-1 gap-5'>
          <button className='text-neutral-600 hover:underline' onClick={() => setShowUserDetails(prevState => !prevState)}>
            {showUserDetails ? 'hide details of user' : 'show details of user'}
          </button>
          <button className='text-neutral-600 hover:underline'>
            dismiss notification
          </button>
        </div>
      </div>
    )
  };

  return (
    <div className='w-full h-full flex items-center slide-in-left'>
      <div className="flex flex-col gap-4 w-full lg:w-[80%] xl:w-[70%]">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 w-full'>Notifications</h2>
        <PaymentNotificationCard
          client='Sulaimon'
          paidDate={new Date().toISOString()}
          propertyTag='rent'
          isAgent={false}
        />
        <PaymentNotificationCard
          client='Samson'
          paidDate={'2024-02-27T11:30:00.000Z'}
          propertyTag='sale'
          isAgent
        />
        <PaymentNotificationCard
          client='Sulaimon'
          paidDate={'2024-03-25T10:30:00.000Z'}
          propertyTag='rent'
          isAgent
        />
        <NotificationCard
          user='James'
          propertyId='property_1'
        />
        <InspectionNotificationCard
          user='Salisu'
          propertyId='property_2'
        />
      </div>
    </div>
  )
}

export default Notifications