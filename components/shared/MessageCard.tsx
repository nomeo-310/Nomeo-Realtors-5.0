import React from 'react'

type messageCardProps = {
  date:string
  name:string
  message:string
  userMessage:boolean
}

const MessageCard = ({date, name, message, userMessage}:messageCardProps) => {
  return (
    <div className={`flex gap-1 ${userMessage ? 'justify-start' : 'justify-end'}`}>
      <div className='flex flex-col gap-[3px]'>
        <p className={`${userMessage ? '': 'text-right'}`}>{name} <span className='text-sm'>{date}</span></p>
        <div className={`py-2 px-3 ${userMessage ? 'rounded-r-xl rounded-bl-xl': 'rounded-l-xl rounded-br-xl'} bg-gray-200 text-sm`}>{message}</div>
      </div>
    </div>
  )
};

export default MessageCard
