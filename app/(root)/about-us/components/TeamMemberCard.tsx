'use client'

import React from 'react'
import Image from 'next/image'
import { BsInstagram, BsLinkedin, BsThreads } from 'react-icons/bs'
import Link from 'next/link'

type memberCardProps = {
  name: string
  role: string
  instagramUrl: string
  threadsUrl: string
  linkedinUrl: string
  imageUrl: string
}

const TeamMemberCard = ({name, role, instagramUrl, imageUrl, threadsUrl, linkedinUrl}:memberCardProps) => {
  return (
    <div className="w-full h-fit cursor-pointer group drop-shadow-md overflow-hidden">
      <div className="aspect-square overflow-hidden rounded-md w-full h-full relative flex items-center justify-center">
        <Image src={imageUrl} alt={`${name}_image`} fill priority className='object-cover'/>
        <div className='p-8 md:p-4 absolute w-full h-full bg-black/30 z-[200] top-0 left-0 opacity-0 group-hover:opacity-100 transition translate-y-[100vh] group-hover:translate-y-0 duration-500 ease-in-out group-active:translate-y-0 flex place-items-end justify-center'>
          <div className='w-full py-4 rounded-md drop-shadow-md bg-white/90 -translate-y-[100vh] delay-500 ease-in-out duration-700 group-hover:translate-y-0 z-[500] flex items-center justify-center flex-col' onClick={() => console.log('say hello')}>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p>{role}</p>
            <div className='mt-4 flex items-center gap-4'>
              <Link href={instagramUrl}><BsInstagram size={24} className='hover:scale-125 hover:text-yellow-400'/></Link>
              <Link href={threadsUrl}><BsThreads size={24} className='hover:scale-125 hover:text-yellow-400'/></Link>
              <Link href={linkedinUrl}><BsLinkedin size={24} className='hover:scale-125 hover:text-yellow-400'/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TeamMemberCard