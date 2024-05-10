'use client'


import React from 'react'
import { propertyProps } from '@/components/data/constants';
import { HiXMark } from 'react-icons/hi2';
import ChatSection from './ChatSection';
import ImageAvatar from '@/components/shared/ImageAvatar';
import Link from 'next/link';

const AgentSection = ({property}:{property:propertyProps}) => {

  const [openChat, setOpenChat] = React.useState(false);
  const nairaSign:string = String.fromCodePoint(8358);
  const agentOnline = true;

  const ChatCorner = () => {
    return (
      <div className="my-4 w-full slide-in-left">
        <div className='w-full flex items-center justify-between'>
          <h2 className='text-xl lg:text-2xl'>Chat</h2>
          <HiXMark size={22} className='cursor-pointer' onClick={() => setOpenChat(false)}/>
        </div>
        <ChatSection/>
      </div> 
    )
  }

  return (
    <div className="md:w-[50%] lg:w-[45%] w-full md:border-l md:pl-4">
      <div className="my-4 w-full">
        <h2 className='text-xl lg:text-2xl'>Agent in Charge</h2>
        <div className="flex mt-3 gap-3 items-center">
          <div className={`w-fit ${agentOnline && 'border-2 rounded-full border-green-600 relative'}`}>
            {agentOnline && <div className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-600 absolute right-0 bottom-0 md:bottom-1 md:-right-1 block z-50 border-2 border-gray-50'/>}
            <ImageAvatar className={`md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden ${property.agentInChargeImage === '' && 'border'}`} src={property.agentInChargeImage}/>
          </div>
          <div className='w-full'>
            <p>Name: {property.agentInCharge}</p>
            <p>Agency: PearlRealtors Agency Inc.</p>
            <div className='w-full flex items-center justify-between mt-3'>
              <div>
                <Link href={'user/user_id'} className='mt-5 underline'>Checkout profile</Link>
              </div>
              <div onClick={() => setOpenChat(true)} className='cursor-pointer underline'>
                Chat with agent
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="my-4 w-full">
        <h2 className='text-xl lg:text-2xl'>Agent Charges</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <p className='border rounded-full py-2 px-4 capitalize'>Physical Inspection: {nairaSign}1,000.00 <span className='lg:text-base text-sm lowercase'>per hour</span></p>
          <p className='border rounded-full py-2 px-4 capitalize'>Virtual Inspection: {nairaSign}3,000.00 <span className='lg:text-base text-sm lowercase'>per hour</span></p>
        </div>
      </div>
      {openChat && 
        <>
          <hr/>
          <ChatCorner/>
        </>
      }
    </div>
  )
};

export default AgentSection
