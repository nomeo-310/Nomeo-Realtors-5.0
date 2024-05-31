import { formatTargetDate, useCountdownTimer } from '@/hooks/countdownTimer'
import React from 'react'

type Props = {}

const Notifications = (props: Props) => {
  const PaymentNotificationCard = ({client, paidDate, propertyTag}:{client:string, paidDate:string, propertyTag:string}) => {

    const futureDate = formatTargetDate(paidDate);
    const { days, hours, minutes, seconds } = useCountdownTimer(futureDate.toISOString());

    return (
      <div className="w-full bg-gray-200 rounded lg:p-4 p-3 flex gap-2 flex-col relative overflow-hidden">
        <div className="md:text-lg w-fit">{client}&apos;s next {propertyTag === 'rent' ?  'rent' : 'annual mortgage'} is due in:</div>
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
  }

  return (
    <div className='w-full h-full flex items-center slide-in-left'>
      <div className="flex flex-col gap-4 w-full lg:w-[80%] xl:w-[70%]">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 w-full'>Notifications</h2>
        <PaymentNotificationCard
          client='Sulaimon'
          paidDate={new Date().toISOString()}
          propertyTag='rent'
        />
        <PaymentNotificationCard
          client='Samson'
          paidDate={'2024-02-27T11:30:00.000Z'}
          propertyTag='sale'
        />
        <PaymentNotificationCard
          client='Sulaimon'
          paidDate={'2024-03-25T10:30:00.000Z'}
          propertyTag='rent'
        />
        <div className="w-full bg-gray-200 rounded lg:p-4 p-3 flex gap-2 flex-col">
          <div className="md:text-lg w-fit"><span className='underline cursor-pointer'>Tunde</span> showed interest in one of your <span className='underline cursor-pointer'>property</span></div>
          <div className='flex items-center justify-end mt-1 gap-5'>
            <button className='text-neutral-600 hover:underline'>
              chat him up
            </button>
            <button className='text-neutral-600 hover:underline'>
              dismiss notification
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications