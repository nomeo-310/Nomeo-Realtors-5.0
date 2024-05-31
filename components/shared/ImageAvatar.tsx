'use client'

import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type imageAvatarProps = {
  src?: string
  alt?: string
  className?: string
}

const ImageAvatar = ({src, alt, className}: imageAvatarProps) => {
  return (
    <div className={twMerge('relative w-11 h-11 flex items-center justify-center bg-gray-200', className)}>
      <Image src={src ? src : '/images/default_user.png'} alt={alt ? alt : 'avatar'} fill className=''/>
    </div>
  )
}

export default ImageAvatar