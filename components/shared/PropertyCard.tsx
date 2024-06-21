'use client'

import React from 'react'
import Image from 'next/image'
import { HiBookmark, HiEllipsisHorizontalCircle, HiEllipsisVertical, HiHeart, HiMiniTrash, HiOutlineBookmark, HiOutlineMapPin } from "react-icons/hi2";
import { SlSizeFullscreen } from "react-icons/sl"
import { LuBed } from "react-icons/lu"
import { LiaBathSolid, LiaToiletSolid } from "react-icons/lia"
import ImageAvatar from '@/components/shared/ImageAvatar'
import { useRouter } from 'next/navigation'
import { propertyProps } from '../data/constants';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { moneyFormat } from '@/hooks/moneyFormat';
import { TbHomeX, TbHomeEdit } from "react-icons/tb"

type propertyCardProps = Omit<propertyProps, 'mainFees'| 'optionalFees' | 'intro' | 'description'| 'verifiedamenities' | 'propertyImageList' | 'nearbyPlaces' > & { hideTag: boolean, agentDisplay: boolean}

const PropertyCard = ({agentDisplay, hideTag, id, propertTag, propertyImage, propertySize, propertyCost, baths, beds, title, toilets, agentInCharge, agentInChargeImage, liked, location, saved, monthlyRent}:propertyCardProps) => {
  const nairaSign:string = String.fromCodePoint(8358);
  const router = useRouter();

  const [showMenu, setShowMenu] = React.useState(false);

  const handleOpenMenu = (event:React.MouseEvent) => {
    event.stopPropagation()
    setShowMenu((prevState) => !prevState);
  }

  const handleDelete = (event:React.MouseEvent) => {
    event.stopPropagation()
    console.log('item deleted')
    setShowMenu(false)
  }

  console.log(showMenu)

  return (
    <div className="w-full flex flex-col gap-2 cursor-pointer group" onClick={() => router.push(`/property/${id}`)}>
      <div className="bg-gray-300 relative md:aspect-square aspect-video xl:h-[15rem] lg:h-[14rem] md:h-[13rem] h-[14rem] flex items-center justify-center overflow-hidden rounded">
         <Image alt='image_here' src={propertyImage} className='object-cover' fill priority/>
         {!hideTag && <div className="bg-white py-1.5 px-4 rounded absolute left-3 top-3 uppercase">{propertTag}</div>}
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
            <ImageAvatar className='rounded overflow-hidden lg:w-12 lg:h-12 w-11 h-11' src={agentInChargeImage}/>
            <p>{agentInCharge}</p>
          </div>
        </div>
        { agentDisplay ? 
          <div className="right-1 top-1 absolute flex items-center gap-4 text-white">
            <HiEllipsisHorizontalCircle size={25} onClick={(event) =>handleOpenMenu(event)}/>
          </div> : 
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
        }
        { showMenu && 
          <div className="right-3 top-8 absolute bg-white rounded w-[90px] overflow-hidden">
            <div className='flex items-center justify-between hover:bg-neutral-600 hover:text-white py-1 px-2' onClick={(event) => handleDelete(event)}>
              <TbHomeX size={20}/>
              Delete
            </div>
            <div className='flex items-center justify-between hover:bg-neutral-600 hover:text-white py-1 px-2' onClick={(event) => handleDelete(event)}>
              <TbHomeEdit size={20} />
              Edit
            </div>
          </div>
        }
      </div>
      <div>
        <p className='text-lg line-clamp-1 mb-2 font-semibold'>{title}</p>
        <div className="flex items-center justify-between lg:text-lg">
          <div className="flex items-center gap-2">
            <HiOutlineMapPin size={22}/>
            <p>{location}.</p>
          </div>
          <div className='text-yellow-400'>
            {nairaSign}{ propertTag === 'rent' ? `${moneyFormat(monthlyRent as number)}` : `${moneyFormat(propertyCost as number)}`} {propertTag === 'rent' ? <span>monthly</span> : '' }
          </div>
        </div>
      </div>
    </div>
  )
};

export default PropertyCard