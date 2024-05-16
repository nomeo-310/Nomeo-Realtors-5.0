'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { PuffLoader } from "react-spinners"

type Props = {
  style?: string
}

const LoadingDisplay = ({style}: Props) => {
  return (
    <div className={twMerge('w-full h-screen flex items-center justify-center flex-col', style)}>
      <PuffLoader size={80} color='grey'/>
    </div>
  )
}

export default LoadingDisplay