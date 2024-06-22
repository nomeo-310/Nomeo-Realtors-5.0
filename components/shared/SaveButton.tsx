'use client'

import useLogin from '@/hooks/useLogin';
import React from 'react'
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi2';


const SaveButton = () => {
  const saved = false;
  const isLoggedIn = false;
  const loginUser = useLogin();

  const handleSave = () => {
    if (!isLoggedIn) {
      loginUser.onOpen();

      return;
    }

    console.log('saved the property')
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
