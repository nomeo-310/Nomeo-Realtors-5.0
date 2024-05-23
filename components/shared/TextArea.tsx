'use client'

import React from 'react'
import { cn } from '@/hooks/cn';
import { IconType } from 'react-icons/lib';

interface textareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: IconType
}

const TextArea = React.forwardRef<HTMLTextAreaElement, textareaProps>(({className, icon:Icon, ...props}) => {
  return (
    <div className={cn('rounded bg-gray-200 text-neutral-600 w-full relative h-[14rem]', className)}>
      <textarea className={`cursor-pointer rounded bg-inherit w-full h-full md:p-4 p-3.5 focus:outline-none resize-none lg:text-lg ${Icon ? 'pl-10 md:pl-12 lg:pl-12' : ''}`} {...props} >
      </textarea>
      {Icon && <Icon size={22} className='md:hidden absolute left-2.5 top-2.5'/>}
      {Icon && <Icon size={25} className='hidden md:block absolute left-3.5 top-3.5'/>}
    </div>
  )
});

TextArea.displayName = 'TextArea';

export default TextArea