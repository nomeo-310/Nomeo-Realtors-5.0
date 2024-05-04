'use client'

import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type headerProps = {
  className?: string
  mainTitle: string
  subTitle?:string
  linkTitle?:string
  link?:string
}

const Header = ({className, mainTitle, subTitle, link, linkTitle}: headerProps) => {
  return (
    <div className={twMerge('flex flex-col lg:gap-3 gap-2', className)}>
      <div className="flex items-center justify-between">
        <h2 className='lg:text-5xl text-3xl'>{mainTitle}</h2>
        {link && <Link href={link} className='lg:text-lg text-yellow-400 hover:underline'>{linkTitle}</Link>}
      </div>
      <p className='ml-2 lg:text-xl md:text-lg'>{subTitle}</p>
    </div>
  )
}

export default Header;