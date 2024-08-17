'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

type cardProps = {
  className?:string
  children: React.ReactNode
  onClick?: () => void
}

const Card = ({className, children, onClick}: cardProps) => {
  return (
    <div className={twMerge('bg-white drop-shadow rounded lg:p-4 p-3 w-full mb-3', className)} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card