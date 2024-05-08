'use client'

import React from 'react'
import { IconType } from 'react-icons/lib';
import { CiWifiOn } from "react-icons/ci"
import { PiSwimmingPoolThin } from "react-icons/pi"
import { IoFlowerSharp } from "react-icons/io5"
import { MdOutlineYard } from "react-icons/md"
import { TbToolsKitchen } from "react-icons/tb"


interface Props {
  icon?:IconType
  label:string
}

export const iconGenerator = (label:string) => {
  let Icon:IconType;

  if (label === 'wifi') {
    return Icon = CiWifiOn;
  } else if (label === 'private pool') {
    return Icon = PiSwimmingPoolThin;
  } else if (label === 'landscaped gardens') {
    return Icon = IoFlowerSharp;
  } else if (label ==='backyard') {
    return Icon = MdOutlineYard;
  } else if (label ==='modern kitchen') {
    return TbToolsKitchen;
  }else {
    return
  }
}

const Amenities = ({icon:Icon, label}: Props) => {

  return (
    <div className='lg:text-lg border rounded-full py-2.5 px-5 capitalize flex items-center gap-2'>
      <p>{label}</p>
      {Icon && <Icon size={22}/>}
    </div>
  )
}

export default Amenities
