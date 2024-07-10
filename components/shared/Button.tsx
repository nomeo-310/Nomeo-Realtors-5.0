'use client'

import React from 'react'
import { cn } from '@/hooks/cn'

type buttonProps = {
  type:"submit" | "button" | "reset"
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

const Button = ({type, onClick, disabled, className, children}:buttonProps) => {
  return (
    <button type={type} className={cn('px-9 py-3 md:px-10 bg-neutral-700 text-white rounded-full hover:bg-neutral-500 disabled:bg-neutral-500', className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button