'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

type headerProps = {
  className?: string
  mainTitle: string
  subTitle?:string
}

const Header = ({className, mainTitle, subTitle}: headerProps) => {
  return (
    <div className={twMerge('flex flex-col lg:gap-3 gap-2', className)}>
      <h2 className='lg:text-5xl text-3xl'>{mainTitle}</h2>
      <p className='ml-2 lg:text-xl md:text-lg'>{subTitle}</p>
    </div>
  )
}

export default Header;