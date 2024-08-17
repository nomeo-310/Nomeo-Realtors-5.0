'use client'


import Button from '@/components/shared/Button';
import React from 'react'

type controlButtonProps = {
  pageNumber: number;
  disableButton: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const ControlButtons = ({pageNumber, setPageNumber, disableButton}: controlButtonProps) => {

  const onClickNext = React.useCallback(() => {
    setPageNumber(pageNumber + 1)
  },[pageNumber, setPageNumber]);

  const onClickPrevious = React.useCallback(() => {
    setPageNumber(pageNumber - 1)
  },[pageNumber, setPageNumber]);

  return (
    <div className="mt-6 md:mt-8 flex items-center justify-between">
      { pageNumber > 0 && 
        <Button type='button' onClick={onClickPrevious} className='text-lg'>
          Previous
        </Button>
      }
      <Button type='button' onClick={onClickNext} className='text-lg disabled:bg-neutral-500' disabled={disableButton}>
        Next
      </Button>
    </div>
  )
}

export default ControlButtons