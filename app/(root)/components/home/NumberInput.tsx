'use client'

import React from 'react'

type NumberInputProps = {
  id: string
  label: string
  placeholder: string
  value: string | number
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const NumberInput = ({id, label, placeholder, value, onChange}:NumberInputProps) => {
  const nairaSign:string = String.fromCodePoint(8358);
  return (
    <div className='w-full'>
      <label htmlFor={id} className='uppercase ml-2 mb-1 text-sm block'>{label} ({nairaSign})</label>
      <input id={id} type="number" className='w-full rounded-md bg-white p-2 lg:p-2.5 outline-none placeholder:text-gray-400' placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default NumberInput