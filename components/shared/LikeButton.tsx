'use client'

import useLogin from '@/hooks/useLogin';
import { likeProperty } from '@/libs/actions/properties.action';
import { currentUserProps, featuredPropertiesProps } from '@/types/types';
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { toast } from 'sonner';


type likeButtonProps = {
  property: featuredPropertiesProps
  user: currentUserProps
}

const LikeButton = ({user, property}:likeButtonProps) => {
  const path = usePathname();
  const loginUser = useLogin();

  const liked = property.likes.includes(user?._id);

  const handleLike = async () => {
    if (!user) {
      loginUser.onOpen();
      return;
    };

    const likeData = {id: property._id, path: path}

    try {
      await likeProperty(likeData)
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
    <div className={`md:w-10 md:h-10 w-9 h-9 rounded-full flex items-center justify-center ${liked ? 'bg-red-100' : 'bg-gray-100'}`}>
      <button className='relative hover:opacity-80 transition cursor-pointer mt-1 hidden md:block' onClick={handleLike}>
        <AiOutlineHeart size={25} className='fill-white absolute -top-[2px] -right-[2px]'/>
        <AiFillHeart size={21} className={`${liked ? 'fill-rose-400' : 'fill-gray-300'}`}/>
      </button>
      <button className='relative hover:opacity-80 transition cursor-pointer mt-1 md:hidden' onClick={handleLike}>
        <AiOutlineHeart size={23} className='fill-white absolute -top-[2px] -right-[2px]'/>
        <AiFillHeart size={19} className={`${liked ? 'fill-rose-400' : 'fill-gray-300'}`}/>
      </button>
    </div>
  )
}

export default LikeButton
