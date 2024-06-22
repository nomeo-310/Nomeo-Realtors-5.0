import React from 'react'
import { HiXMark } from 'react-icons/hi2'
import Button from './Button'

type modalProps = {
  children: React.ReactNode
  isOpen: boolean
  title: string
  onClose: () => void
}

const Modal = ({children, isOpen, title, onClose}: modalProps) => {
  const [showModal, setShowModal] = React.useState(isOpen);

  React.useEffect(() => {
    setShowModal(isOpen)
  },[isOpen]);

  const handleClose = React.useCallback(() => {
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose]);

  const handleSubmit = () => {

  }

  return (
    <React.Fragment>
      { isOpen &&
        <div className='fixed inset-0 overflow-hidden flex items-center justify-center outline-none focus:outline-none z-[80000] bg-neutral-800/70'>
          <div className="relative w-[92%] md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-auto md:h-auto lg:h-auto">
            <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}>
              <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center p-5 rounded-t justify-center relative">
                  <button onClick={handleClose} className='p-1 border-0 hover:opacity-70 transition absolute left-5'>
                    <HiXMark size={22}/>
                  </button>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</div>
                </div>
                <div className='p-6'>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default Modal;