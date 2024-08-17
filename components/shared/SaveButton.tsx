'use client'

import React from 'react'
import useLogin from '@/hooks/useLogin';
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi2';
import { currentUserProps, featuredPropertiesProps } from '@/types/types';
import { usePathname } from 'next/navigation';
import { bookmarkProperty } from '@/libs/actions/properties.action';
import { toast } from 'sonner';

type saveButtonProps = {
  property: featuredPropertiesProps
  user: currentUserProps
}


const SaveButton = ({user, property}:saveButtonProps) => {
  const path = usePathname();
  const loginUser = useLogin();

  const saved = property.bookmarks.includes(user?._id)

  const handleSave = async () => {
    if (!user) {
      loginUser.onOpen();

      return;
    }

    const saveData = {id: property._id, path: path}

    try {
      await bookmarkProperty(saveData)
      .then((response) => {
        if (response?.success) {
          toast.success(response.success)
        };

        if (response?.error) {
          toast.error(response.error)
        };
      })
    } catch (error) {
      toast.error('Something went wrong, try again later')
    };
  };

  return (
    <div className={`md:w-10 md:h-10 w-9 h-9 rounded-full flex items-center justify-center ${saved ? 'bg-blue-100' : 'bg-gray-100'}`}>
      <button className='relative hover:opacity-80 transition cursor-pointer mt-1 hidden md:block' onClick={handleSave}>
        <HiOutlineBookmark size={25} className='text-white absolute -top-[2px] -right-[2px]'/>
        <HiBookmark size={21} className={`${saved ? 'text-blue-400' : 'text-gray-300'}`}/>
      </button>
      <button className='relative hover:opacity-80 transition cursor-pointer mt-1 md:hidden' onClick={handleSave}>
        <HiOutlineBookmark size={23} className='text-white absolute -top-[2px] -right-[2px]'/>
        <HiBookmark size={19} className={`${saved ? 'text-blue-400' : 'text-gray-300'}`}/>
      </button>
    </div>
  )
}

export default SaveButton;
