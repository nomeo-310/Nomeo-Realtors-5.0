'use client'

import React from 'react'
import Image from 'next/image'
import { HiBookmark, HiHeart, HiOutlineBookmark, HiOutlineMapPin } from "react-icons/hi2";
import { SlSizeFullscreen } from "react-icons/sl"
import { LuBed } from "react-icons/lu"
import { LiaBathSolid, LiaToiletSolid } from "react-icons/lia"
import ImageAvatar from '@/components/shared/ImageAvatar'
import { useRouter } from 'next/navigation'
import { propertyProps } from '../data/constants';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type propertyCardProps = Omit<propertyProps, 'mainFees'| 'optionalFees' | 'intro' | 'description'| 'verifiedamenities' | 'propertyImageList' >

const PropertyCard = ({id, propertTag, propertyImage, propertySize, propertyCost, baths, beds, title, toilets, agentInCharge, agentInChargeImage, liked, location, saved, monthlyRent}:propertyCardProps) => {
  const nairaSign:string = String.fromCodePoint(8358);
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-2 cursor-pointer group" onClick={() => router.push(`/property/${id}`)}>
      <div className="bg-gray-700 relative md:aspect-square aspect-video xl:h-[280px] lg:h-[250px] md:h-[230px] h-[220px] flex items-center justify-center overflow-hidden rounded-md">
        <Image alt='image_here' src={propertyImage} className='object-cover' fill priority/>
        <div className="bg-white py-1.5 px-4 rounded-full absolute left-3 top-3 uppercase">{propertTag}</div>
        <div className="bg-black/30 left-0 bottom-0 w-full p-4 absolute text-white flex items-center justify-between lg:-translate-x-[100vw] duration-500 lg:group-hover:translate-x-0 ease-in-out">
          <div>
            <div className='flex items-center gap-2'>
              <SlSizeFullscreen size={18}/> 
              <p className='lg:text-lg'>{propertySize}m<sup>2</sup></p>
            </div>
            <div className='flex items-center gap-2'>
              <LuBed size={18}/> 
              <p className='lg:text-lg'>{beds} Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <LiaBathSolid size={18}/> 
              <p className='lg:text-lg'>{baths} Baths</p>
            </div>
            <div className='flex items-center gap-2'>
              <LiaToiletSolid size={18}/> 
              <p className='lg:text-lg'>{toilets} Toilets</p>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-2 items-center'>
            <ImageAvatar className='rounded-full overflow-hidden lg:w-12 lg:h-12 w-11 h-11' src={agentInChargeImage}/>
            <p>{agentInCharge}</p>
          </div>
        </div>
        <div className="right-3 top-3 absolute flex items-center gap-4">
          {liked &&
            <div className='relative hover:opacity-80 transition cursor-pointer mt-1'>
              <AiOutlineHeart size={26} className='fill-white absolute -top-[2px] -right-[2px]'/>
              <AiFillHeart size={22} className={`${liked ? 'fill-rose-500' : ''}`}/>
            </div>
          }
          {saved &&
            <div className='relative hover:opacity-80 transition cursor-pointer mt-1'>
              <HiOutlineBookmark size={26} className='text-white absolute -top-[2px] -right-[2px]'/>
              <HiBookmark size={22} className={`${saved ? 'text-blue-400' : ''}`}/>
            </div>
          }
        </div>
      </div>
      <div>
        <p className='lg:text-xl text-lg line-clamp-1 mb-2 font-semibold'>{title}</p>
        <div className="flex items-center justify-between lg:text-lg">
          <div className="flex items-center gap-2">
            <HiOutlineMapPin size={22}/>
            <p>{location}.</p>
          </div>
          <div className='text-yellow-400'>
            {nairaSign} { propertTag === 'rent' ? `${monthlyRent?.toLocaleString()}` : `${propertyCost?.toLocaleString()}`} {propertTag === 'rent' ? <span>per month</span> : '' }
          </div>
        </div>
      </div>
    </div>
  )
};

export default PropertyCard