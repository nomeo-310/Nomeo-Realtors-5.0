import React from 'react'
import { twMerge } from 'tailwind-merge'

type loadMoreProps = {
  className?: string
  loadmoreFunction: () => void
  label?: string
}

const LoadMoreButton = ({className, loadmoreFunction, label}: loadMoreProps) => {
  return (
    <div className={twMerge('mt-12 w-full flex items-center justify-center', className)}>
      <button onClick={loadmoreFunction} className='bg-neutral-700 text-white py-2.5 px-6 xl:py-3 xl:px-7 xl:text-lg rounded-full hover:opacity-80'>
        {label ? label : 'Load more'}
      </button>
    </div>
  )
};

export default LoadMoreButton