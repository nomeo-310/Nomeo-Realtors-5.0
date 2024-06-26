'use client'


import React from 'react'
import { formDataType } from './AgentSignupModal';
import { toast } from 'sonner';
import { HiOutlineCreditCard, HiOutlineLink, HiOutlineSparkles } from 'react-icons/hi2';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import TextArea from '@/components/shared/TextArea';
import useTermsAndConditions from '@/hooks/useTermsAndConditions';
import useAgentSignUp from '@/hooks/useAgentSignUp';

type pageProps = {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
  formData: formDataType
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>
};

const PageThree = ({pageNumber, setPageNumber, formData, setFormData}:pageProps) => {
  const agentSignUp = useAgentSignUp();
  const termsAndConditions = useTermsAndConditions();
  
  const [agreed, setAgreed] = React.useState(false);

  const { inspectionFee, bio, agencyWebsite } = formData;

  const novalue = inspectionFee === 0 && bio === '' && agreed === false;
  const [disableNext, setDisableNext] = React.useState(novalue)
  const nairaSign:string = String.fromCodePoint(8358);

  const onPrevious = () => {
    setPageNumber(pageNumber - 1);
  };

  const submitData = (event:React.FormEvent) => {
    event.preventDefault();

    if (bio && bio.length < 100) {
      toast.error('Your bio should give a moderate description and attract your clients.');

      return;
    }

    console.log(formData)
  }

  const onChangeInspectionFee = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setFormData({...formData, inspectionFee: value});
  };

  const onOpenTermsAndConditions = () => {
    agentSignUp.onClose();
    termsAndConditions.onOpen();
  }

  React.useEffect(() => {
    if (inspectionFee !== 0 && agreed === true && bio !== '') {
      setDisableNext(false);
    }
  },[agreed, bio, inspectionFee]);


  return (
    <form className='flex flex-col gap-3' onSubmit={submitData}>
      <h2 className='text-lg lg:text-2xl'>Other Details & Bio</h2>
      <Input
        icon={HiOutlineCreditCard}
        placeholder={`enter inspection fee (${nairaSign} per hour)`}
        type='number'
        value={inspectionFee || ''}
        onChange={onChangeInspectionFee}
      />
      <Input
        icon={HiOutlineLink}
        placeholder='Add link to your agency website (if any)'
        type='text'
        value={agencyWebsite}
        onChange={(event) => setFormData({...formData, agencyWebsite: event.target.value})}
      />
      <TextArea
        icon={HiOutlineSparkles}
        placeholder='Give a description about yourself and what you do (make it catchy!!)'
        value={bio}
        onChange={(event) => setFormData({...formData, bio: event.target.value})}
      />
      <div className='flex items-center gap-3'>
        <Input
          className='w-fit p-0 bg-inherit m-0 accent-neutral-700'
          type='checkbox'
          id='terms-and-conditions'
          name='terms-and-conditions'
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
        />
        <button className='underline' onClick={onOpenTermsAndConditions}>
          I agree to the terms and conditions of Nomeo Suites
        </button>
      </div>
      <div className="mt-6 md:mt-8 flex items-center justify-between">
        <Button type='button' onClick={onPrevious} className='text-lg'>
          Previous
        </Button>
        <Button type='submit' className='text-lg disabled:bg-neutral-500' disabled={disableNext}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default PageThree