'use client'



import React from 'react'
import MessageCard from '@/components/shared/MessageCard'
import { HiPaperAirplane } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

interface chatSectionProps {
  style?: string
}

const ChatSection = ({style}:chatSectionProps) => {
  const loggedInUser = 'Oseni Segun';
  const agentInCharge = 'Olatunde Oluseni'

  return (
    <React.Fragment>
      <div className={twMerge("min-h-[16rem] md:min-h-[18rem] lg:min-h-[16rem] md:max-h-[32rem] lg:max-h-[18rem] max-h-[20rem] overflow-hidden overflow-y-auto py-3 flex flex-col gap-4", style)}>
        <MessageCard
          date='12:11PM'
          name={loggedInUser}
          message='first test message of the application. I actually hope this is long enough to test what it looks like in more than one line and in other queries.'
          userMessage={true}
        />
        <MessageCard
          date='12:12PM'
          name={agentInCharge}
          message='second test message of the application that is meant to be long enough to display how long the message should be when checking all queries.'
          userMessage={false}
        />
        <MessageCard
          date='12:14PM'
          name={loggedInUser}
          message='third test message of the application'
          userMessage={true}
        />
        <MessageCard
          date='12:16am'
          name={agentInCharge}
          message='first test message of the application. I actually hope this is long enough to test what it looks like in more than one line and in other queries.'
          userMessage={false}
        />
        <MessageCard
          date='12:18PM'
          name={loggedInUser}
          message='first test message of the application. I actually hope this is long enough to test what it looks like in more than one line and in other queries.'
          userMessage={true}
        />
        {/* <div className='w-full h-full flex items-center justify-center'>
          No messages yet, send a message to the agent in charge.
        </div> */}
      </div>
      <div className="w-full mt-3 flex gap-2 items-center">
        <input type="text" className='p-2.5 border rounded-md grow outline-none focus:outline-none bg-inherit' placeholder='type a message ...'/>
        <div className='w-fit'>
          <HiPaperAirplane size={30} className='cursor-pointer'/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChatSection
