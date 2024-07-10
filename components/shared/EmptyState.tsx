import React from 'react'

type emptyStateProps = {
  message: string
}

const EmptyState = ({message}: emptyStateProps) => {
  return (
    <div className='bg-gray-300 p-5 rounded-full text-center'>
      <h2 className='text-lg'>{message}</h2>
    </div>
  )
}

export default EmptyState