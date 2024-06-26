'use client'


import React from 'react'
import { MdOutlineCopyright } from "react-icons/md"
import usePrivacyPolicy from '@/hooks/usePrivacyPolicy';
import useTermsOfService from '@/hooks/useTermsOfService';


const BottomSection = () => {
  const date:Date = new Date();
  const termsOfService = useTermsOfService();
  const privacyPolicy = usePrivacyPolicy();
  
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-10">
      <div className='flex items-center gap-1 text-white md:justify-start justify-center'>
        <MdOutlineCopyright/>
        <h2>{date.getFullYear()} Nomeo Suites. All Rights Reserved.</h2>
      </div>
      <div className="flex gap-4 text-white md:justify-start justify-center">
        <button className='hover:underline' onClick={termsOfService.onOpen}>Terms of Service</button>
        <button className='hover:underline' onClick={privacyPolicy.onOpen}>Privacy Policy</button>
        <button className='hover:underline'>Cookies</button>
      </div>
    </div>
  )
};

export default BottomSection