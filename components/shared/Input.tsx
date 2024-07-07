'use client'

import React from 'react'
import { cn } from '@/hooks/cn';
import { IconType } from 'react-icons/lib';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
  
}

const Input = React.forwardRef<HTMLInputElement, inputProps>(({className, type, disabled, icon:Icon, ...props}, ref) => {
  const [inputType, setInputType] = React.useState('password')

  return (
    <div className={cn('rounded bg-gray-200 text-neutral-600 w-full relative', className)}>
      <input type={ type === 'password' ? inputType : type } className={`cursor-pointer rounded bg-inherit w-full md:p-4 p-3.5 focus:outline-none lg:text-lg ${Icon ? 'pl-10 md:pl-12 lg:pl-12' : ''}`} disabled={disabled} {...props} ref={ref}/>
      {Icon && <Icon size={22} className='md:hidden absolute left-2.5 top-1/2 -translate-y-1/2'/>}
      {Icon && <Icon size={25} className='hidden md:block absolute left-3.5 top-1/2 -translate-y-1/2'/>}
      {type === 'password' && 
        <React.Fragment>
          { inputType === 'password' ? 
            <>
              <HiOutlineEyeSlash size={22} className='cursor-pointer absolute md:hidden right-2.5 top-1/2 -translate-y-1/2' onClick={() => setInputType('text')}/>
              <HiOutlineEyeSlash size={25} className='cursor-pointer absolute hidden md:block right-3.5 top-1/2 -translate-y-1/2' onClick={() => setInputType('text')}/>
            </> :
            <>
              <HiOutlineEye size={25} className='cursor-pointer absolute hidden md:block right-3.5 top-1/2 -translate-y-1/2' onClick={() => setInputType('password')}/>
              <HiOutlineEye size={22} className='cursor-pointer absolute md:hidden right-2.5 top-1/2 -translate-y-1/2' onClick={() => setInputType('password')}/>
            </>
          }
        </React.Fragment>
      }
    </div>
  )
});

Input.displayName = 'Input';

export default Input;