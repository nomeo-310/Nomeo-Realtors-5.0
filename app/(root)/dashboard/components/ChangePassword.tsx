'use client'

import React from 'react'
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { HiOutlineLockClosed } from 'react-icons/hi2';
import { toast } from 'sonner';
import { usePathname } from 'next/navigation';
import { updatePassword } from '@/libs/actions/user.action';

const ChangePassword = () => {
  const path = usePathname();

  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChangePassword = async (event:React.FormEvent) => {
    event.preventDefault();

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
    };

    setIsLoading(true);
    const updateData = {currentPassword: oldPassword, newPassword: newPassword, path: path};
    await updatePassword(updateData).then((response) => {
      if (response?.success) {
        toast.success(response.success);
        setIsLoading(false);
      };

      if (response?.error) {
        toast.error(response.error);
        setIsLoading(false);
      }
    })

  };

  return (
    <div className='w-full min-h-[73.5vh] flex items-center slide-in-left'>
      <form className="flex flex-col gap-4 w-full lg:w-[80%] xl:w-[70%]" onSubmit={handleChangePassword}>
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
          <Button type='submit'>
            Update Password
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword;