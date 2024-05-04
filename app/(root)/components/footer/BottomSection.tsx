'use client'


import React from 'react'
import Link from 'next/link'
import { MdOutlineCopyright } from "react-icons/md"


const BottomSection = () => {
  const date:Date = new Date();
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-10">
      <div className='flex items-center gap-1 text-white md:justify-start justify-center'>
        <MdOutlineCopyright/>
        <h2>{date.getFullYear()} Nomeo Suites. All Rights Reserved.</h2>
      </div>
      <div className="flex gap-4 text-white md:justify-start justify-center">
        <Link href={'/terms-of-use'} className='hover:underline'>Terms of Use</Link>
        <Link href={'/privacy-policy'} className='hover:underline'>Privacy Policy</Link>
        <Link href={'/cookies-condition'} className='hover:underline'>Cookies</Link>
      </div>
    </div>
  )
};

export default BottomSection