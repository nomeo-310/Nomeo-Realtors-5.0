'use client'

import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface Props {
  
}

const LikeButton = (props: Props) => {
  const liked = false;
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${liked ? 'bg-red-100' : 'bg-gray-100'}`}>
      <button className='relative hover:opacity-80 transition cursor-pointer mt-1'>
        <AiOutlineHeart size={25} className='fill-white absolute -top-[2px] -right-[2px]'/>
        <AiFillHeart size={21} className={`${liked ? 'fill-rose-400' : 'fill-gray-300'}`}/>
      </button>
    </div>
  )
}

export default LikeButton
