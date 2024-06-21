import React from 'react'
import { HiXMark } from 'react-icons/hi2'

type modalProps = {
  children: React.ReactNode
  closeModal: () => void
}

const Modal = ({children, closeModal}: modalProps) => {
  return (
    <div className='fixed left-0 top-0 w-full h-full flex place-items-end justify-center z-[800000] bg-black/20 slide-in-left'>
      <div className="bg-white p-4 rounded drop-shadow-sm w-[92%] md:w-[60%] lg:w-[40%] flex flex-col mb-8">
        <div className='w-full flex items-center justify-end mb-6 md:mb-8'>
          <HiXMark size={22} onClick={closeModal} className='cursor-pointer'/>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal;