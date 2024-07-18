'use client'


import React from 'react'
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import CustomSelectComponent from '@/components/shared/CustomSelectComponent';
import Button from '@/components/shared/Button';
import { formatTime } from '@/hooks/formatTime';
import { toast } from 'sonner';
import useLogin from '@/hooks/useLogin';
import { currentUserProps, featuredPropertiesProps } from '@/types/types';


type agentSectionProps = {
  property: featuredPropertiesProps
  currentUser: currentUserProps
}

const AgentSection = ({property, currentUser}:agentSectionProps) => {

  const loginUser = useLogin();

  const nairaSign:string = String.fromCodePoint(8358);

  const predefinedTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  type inspectionScheduleProps = {
    startDate: Date
  }

  const InspectionSchedule = ({startDate}:inspectionScheduleProps) => {

    const [selectedDate, setSelectedDate] = React.useState(startDate);
    const [selectedTime, setSelectedTime] = React.useState('');

    const handleDateSelect = (date:Date) => {
      setSelectedDate(date);
    };

    const handleSchedule = () => {

      if (!currentUser) {
        loginUser.onOpen();
        return;
      }

      if (selectedTime === '') {
        toast.error('Select the time you will want to inspect property');
        return;
      }
      
      const message = formatTime({date: selectedDate, time: selectedTime});
      toast.success(`You have successfully scheduled inspection of property for ${message}`);
    };

    return (
      <div className="w-full mt-3 flex flex-col gap-3">
        <div>
          <Calendar
            color='#525252'
            date={selectedDate}
            onChange={handleDateSelect}
            className='rounded border'
            direction='horizontal'
          />
        </div>
        <div>
          <CustomSelectComponent
            data={predefinedTimes} 
            selected={selectedTime} 
            placeholder={'time'} 
            setSelected={setSelectedTime}
            flowTop
            selectStyle='lg:w-[89%] w-[86%]'
            flowTopHeight='-top-[11.5rem]'
          />
        </div>
        <div className='mt-4'>
          <Button
            type={'button'} 
            onClick={handleSchedule}>
            Schedule Inspection
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="md:w-[50%] lg:w-[45%] w-full md:border-l md:pl-4">
      <hr/>
      <div className="my-4 w-full">
        <h2 className='text-xl lg:text-2xl'>Agent Charges</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <p className='border rounded-full py-2 px-4 capitalize'>Physical Inspection: {nairaSign}{property.agentInCharge.agencyFee} <span className='lg:text-base text-sm lowercase'>per hour</span></p>
        </div>
      </div>
      <hr/>
      <h2 className='text-xl lg:text-2xl mt-4'>Schedule Inspection</h2>
      <InspectionSchedule 
        startDate={new Date()} 
      />
    </div>
  )
};

export default AgentSection
