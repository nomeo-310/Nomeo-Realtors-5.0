'use client'


import React from 'react'
import { twMerge } from 'tailwind-merge'

type boxProps = {
  children: React.ReactNode
  className?: string
  id?:string
}

const Box = ({children, className, id}: boxProps) => {
  return (
    <div className={twMerge('lg:px-[6%] md:px-[4%] px-[5%] lg:pb-20 pb-16', className)} id={id}>
      {children}
    </div>
  )
}

export default Box;