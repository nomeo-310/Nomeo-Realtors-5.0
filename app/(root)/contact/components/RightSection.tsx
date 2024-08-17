'use client'

import React from 'react'
import { HiAtSymbol, HiOutlineChatBubbleLeftEllipsis, HiOutlineEnvelope, HiOutlinePaperAirplane, HiOutlinePhone, HiOutlineUser } from 'react-icons/hi2'
import Input from '@/components/shared/Input'
import TextArea from '@/components/shared/TextArea'
import Button from '@/components/shared/Button'
import useTermsOfService from '@/hooks/useTermsOfService'
import usePrivacyPolicy from '@/hooks/usePrivacyPolicy'
import { isValidEmail, isValidPhoneNumber } from '@/libs/validations/validations'
import { toast } from 'sonner'

const RightSection = () => {

  const termsOfService = useTermsOfService();
  const privacyPolicy = usePrivacyPolicy();

  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [title, setTitle] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [agreed, setAgreed] = React.useState(false);


  const noValue = fullName === '' && email === '' && message === '' && phoneNumber === '' && agreed === false;
  const [disableSubmit, setDisableSubmit] = React.useState(noValue);


  React.useEffect(() => {
    if (fullName !== '' && email !== '' && message !== '' && phoneNumber !== '' && agreed === true) {
      setDisableSubmit(false)
    }
  }, [agreed, email, fullName, message, phoneNumber]);

  const submitForm = (event:React.FormEvent) => {
    event.preventDefault();

    const validEmail = isValidEmail(email);
    const validPhoneNumber = isValidPhoneNumber(phoneNumber);

    if (fullName && !Number.isNaN(Number(fullName))) {
      toast.error('Type a valid name please');
      
      return;
    }

    if (title && !Number.isNaN(Number(title))) {
      toast.error('Type a valid title please');
      
      return;
    }

    if (fullName && fullName.length < 4) {
      toast.error('Type a proper full name please');

      return;
    }

    if (email && !validEmail) {
      toast.error('Invalid email address');

      return;
    }

    if (phoneNumber && validPhoneNumber?.response === 'isNotEleventDigits') {
      toast.error('The phone number is incomplete, check and retype');

      return;
    }

    if (phoneNumber && validPhoneNumber?.response === 'isNotAValidPhoneNumber') {
      toast.error(`Invalid phone number, because it starts with ${validPhoneNumber.phoneNumberStartValue}`);

      return;
    }

    if (message && message.length < 10) {
      toast.error('Type a resonable message please, do not waste our time');

      return;
    }

    console.log(email, phoneNumber, title, fullName)
  }

  return (
    <div className="h-full">
      <hr className='md:hidden mb-8'/>
      <form className="flex flex-col justify-between h-full" onSubmit={submitForm}>
        <div>
          <h2 className='mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold'>Send Us A Message</h2>
          <div className="flex flex-col gap-3">
            <Input
              icon={HiOutlineUser}
              placeholder='enter your fullname (first and last name)'
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <Input
              icon={HiOutlineEnvelope}
              placeholder='enter your email e.g youremail@email.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              icon={HiAtSymbol}
              placeholder='enter title of message'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              icon={HiOutlinePhone}
              placeholder='enter your phone number e.g +2341234567887'
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <TextArea
              icon={HiOutlineChatBubbleLeftEllipsis}
              placeholder='type your message here'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="-mt-1 flex items-center gap-2">
              <Input
                type='checkbox'
                className='bg-inherit p-0 w-fit accent-neutral-700 text-xl'
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />
              <p>I agree to the <button className='font-semibold underline' onClick={termsOfService.onOpen} type='button'>Terms of Service</button> and <button className='font-semibold underline' onClick={privacyPolicy.onOpen} type='button'>Privacy Policy.</button></p>
            </div>
          </div>
        </div>
        <div className=''>
          <Button type='submit' onClick={() => {}}  className='rounded-md disabled:bg-neutral-500' disabled={disableSubmit}>
            <div className='flex items-center gap-3'>
              <p className='lg:text-lg'>Send Message</p>
              <HiOutlinePaperAirplane size={22}/>
            </div>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RightSection