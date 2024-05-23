'use client'

import React from 'react'
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { HiOutlineLockClosed } from 'react-icons/hi2';
import { toast } from 'sonner';

type Props = {}

const ChangePassword = (props: Props) => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  console.log(oldPassword, newPassword);

  const handleChangePassword = () => {
    if (oldPassword.length > 0 && oldPassword !== newPassword) {
      toast.error('Password does not match!!');
      return;
    };

    if (oldPassword === '' &&  newPassword === '') {
      toast.error('You cannot submit empty fields!!');
      return;
    }

    if (!oldPassword && newPassword.length > 0 || oldPassword === '' && newPassword.length > 0) {
      toast.error('Password cannot be updated!!');
      return;
    };

    if (oldPassword.length > 0 && !newPassword || oldPassword.length > 0 && newPassword === '') {
      toast.error('New password cannot be empty!!');
      return;
    }

    toast.success('Password match, send data to backend')
  };

  return (
    <div className='w-full h-full flex items-center'>
      <div className="flex flex-col gap-4 w-full lg:w-[80%] xl:w-[70%]">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 w-full'>Change Password</h2>
          <Input
            type='password'
            placeholder='your current password'
            icon={HiOutlineLockClosed}
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
          />
          <Input
            type='password'
            placeholder='your new password'
            icon={HiOutlineLockClosed}
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        <div className='mt-8 flex items-center'>
          <Button onClick={handleChangePassword} type='button'>
            Update Password
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;