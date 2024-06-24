'use client'

import React from 'react'
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button';
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi2'
import { formDataType } from './AgentSignupModal';
import { toast } from 'sonner';
import { isValidEmail } from '@/libs/validations/validations';

type pageProps = {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
  formData: formDataType
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>
};

const PageOne = ({pageNumber, setPageNumber, formData, setFormData}:pageProps) => {
  const { surname, lastname, email, password } = formData;
  const noValue = surname === '' && lastname === '' && email === '' && password === '';

  const [disableNext, setDisAbleNext] = React.useState(noValue);

  React.useEffect(() => {
    if (surname && lastname && email && password) {
      setDisAbleNext(false)
    }
  }, [email, lastname, password, surname]);

  const onNext = (event:React.FormEvent) => {
    event.preventDefault();

    if (surname && surname.length < 5) {
      toast.error('Surname should be minimum of 5 characters');

      return;
    } else if (lastname && lastname.length < 5) {
      toast.error('Lastname should be minimum of 5 characters');

      return;
    }else if (email && !isValidEmail(email)) {
      toast.error('Invalid email address');

      return;
    }else if (password && password.length < 8) {
      toast.error('password should be minimum of 5 characters');

      return;
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={onNext}>
      <h2 className='text-lg lg:text-2xl'>Basic Details</h2>
      <Input
        placeholder='enter your surname'
        icon={HiOutlineUser}
        type='text'
        value={surname}
        onChange={(event) => setFormData({...formData, surname: event.target.value})}
      />
      <Input
        placeholder='enter your lastname'
        icon={HiOutlineUser}
        type='text'
        value={lastname}
        onChange={(event) => setFormData({...formData, lastname: event.target.value})}
      />
      <Input
        placeholder='enter your email address'
        icon={HiOutlineEnvelope}
        type='email'
        value={email}
        onChange={(event) => setFormData({...formData, email: event.target.value})}
      />
      <Input
        placeholder='enter your password'
        icon={HiOutlineLockClosed}
        type='password'
        value={password}
        onChange={(event) => setFormData({...formData, password: event.target.value})}
      />
      <div className="mt-6 md:mt-8">
        <Button type='submit' className='text-lg disabled:bg-neutral-500' disabled={disableNext}>
          Next
        </Button>
      </div>
    </form>
  )
};

export default PageOne