/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Box from '@/components/shared/Box'
import { HiChevronRight, HiOutlineMapPin, HiPaperAirplane, HiXMark } from 'react-icons/hi2'
import { propertyList } from '@/components/data/constants'
import Image from 'next/image'
import LikeButton from '@/components/shared/LikeButton'
import SaveButton from '@/components/shared/SaveButton'
import { twMerge } from 'tailwind-merge'
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia'
import ImageAvatar from '@/components/shared/ImageAvatar'
import Link from 'next/link'
import { BsChatLeftText } from 'react-icons/bs'


const PropertyClient = () => {

  const property = propertyList[0];
  const { propertyImageList } = property;
  const lastImageIndex = propertyImageList && propertyImageList.length - 1
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [openSlider, setOpenSlider] = React.useState(false);
  const [openChat, setOpenChat] = React.useState(false);

  const nairaSign:string = String.fromCodePoint(8358);

  const agentOnline = true;

  const nextSlide = () => {
    if (!propertyImageList) {
      return
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    if (!propertyImageList) {
      return
    }

    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const ViewAllButton = ({className}:{className?:string}) => {
    return (
      <button className={twMerge("absolute right-3 bottom-3  bg-white py-2 px-3 rounded-md flex items-center", className)} onClick={() => setOpenSlider(true)}>
        <h2 className='md:text-sm lg:text-base'>View all {property.propertyImageList?.length} photos</h2>
        <div>
          <HiChevronRight size={22}/>
        </div>
      </button>
    )
  }

  return (
    <>
      <Box className='pt-20'>
        <div className='lg:mb-5 mb-4'>
          <h2 className='lg:text-3xl md:text-2xl text-xl'>{property.title}.</h2>
          <div className="w-full flex md:flex-row flex-col md:items-center justify-between gap-2 md:gap-0">
            <div className='flex items-center'>
              <div className='flex items-center gap-2 border-r border-black pr-2'>
                <HiOutlineMapPin size={24} className='hidden md:block'/>
                <HiOutlineMapPin size={20} className='md:hidden'/>
                <p className='lg:text-lg'>{property.location}</p>
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <p className='lg:text-lg capitalize border-r border-black px-2'>for {property.propertTag}</p>
                <p  className='lg:text-lg capitalize'>{property.furnitureTag}</p>
              </div>
            </div>
            <div className='flex items-center gap-5 justify-end'>
              <LikeButton/>
              <SaveButton/>
            </div>
          </div>
        </div>
        <div className='w-full rounded overflow-hidden xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[20rem] grid md:grid-cols-2 gap-2 grid-cols-1'>
          <div className="w-full h-full rounded-md flex justify-center items-center relative overflow-hidden bg-neutral-500">
            <Image src={property.propertyImageList?.[0] || ''} alt='property_image_1' priority className='object-cover' fill/>
            <ViewAllButton  className='md:hidden rounded-full'/>
          </div>
          <div className="w-full h-full md:grid grid-rows-2 overflow-hidden gap-2 hidden">
              <div className="w-full flex h-full justify-center items-center rounded-md relative overflow-hidden bg-neutral-500">
                <Image src={property.propertyImageList?.[1] || ''} alt='property_image_2' priority className='object-cover' fill/>
              </div>
              <div className="grid grid-cols-2 w-full h-full gap-2 overflow-hidden">
                <div className="w-full h-full rounded-md flex items-center justify-center relative overflow-hidden bg-neutral-500">
                  <Image src={property.propertyImageList?.[2] || ''} alt='property_image_3' priority className='object-cover' fill/>
                </div>
                <div className="w-full h-full rounded-md flex items-center justify-center overflow-hidden relative bg-neutral-500 cursor-pointer">
                  <Image src={property.propertyImageList?.[3] || ''} alt='property_image_4' priority className='object-cover' fill/>
                  <ViewAllButton className='rounded-full' />
                </div>
              </div>
          </div>
        </div>
        <div className='my-4 flex justify-between items-start md:items-center flex-col md:flex-row'>
          <p className='lg:text-2xl text-xl mb-2 md:mb-0'>{property.propertTag === 'rent' ? 'Monthly Rent' : 'Price'}: <span className='text-yellow-400'>{nairaSign} {property.propertTag === 'rent' ? property.monthlyRent?.toLocaleString() : property.propertyCost?.toLocaleString()}.00</span></p>
          <div className="py-2.5 px-5 rounded-full bg-neutral-700 text-white flex w-fit gap-2 lg:gap-3 lg:text-lg items-center">
            <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.beds} beds</div>
            <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.baths} baths</div>
            <div className='border-r pr-2.5 lg:pr-3.5 capitalize'>{property.toilets} toilets</div>
            <div className=''>{property.propertySize} sqm</div>
          </div>
        </div>
        <hr/>
        <div className="my-4">
          <h2 className='text-xl lg:text-2xl'>Property Overview</h2>
          <p className='mt-3 lg:text-lg'>{property.description}</p>
        </div>
        <hr/>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[50%] lg:w-[55%] w-full md:pr-4">
            <div className="my-4">
              <h2 className='text-xl lg:text-2xl'>Verified Amenities</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {property.verifiedamenities.map((item:string, index:number) => (
                  <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item}</p>
                ))}
              </div>
            </div>
            <hr/>
            <div className="my-4">
              <h2 className='text-xl lg:text-2xl'>Main Fees</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {property.mainFees.map((item:{name:string, amount:number}, index:number) => (
                  <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.name}:{' '} {nairaSign}{item.amount.toLocaleString()}.00</p>
                ))}
              </div>
            </div>
            <hr/>
            <div className="my-4">
              <h2 className='text-xl lg:text-2xl'>Optional Fees</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {property.optionalFees.map((item:{name:string, amount:number}, index:number) => (
                  <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.name}:{' '} {nairaSign}{item.amount.toLocaleString()}.00</p>
                ))}
              </div>
            </div>
            <hr/>
            <div className="my-4">
              <h2 className='text-xl lg:text-2xl'>Nearby Places</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {property.nearbyPlaces.map((item:{name:string, distance:string}, index:number) => (
                  <p className='border rounded-full py-2 px-4 capitalize' key={index}>{item.name}: {item.distance} <span className='lowercase'>away</span></p>
                ))}
              </div>
            </div>
            <hr className='md:hidden'/>
          </div>
          <div className="md:w-[50%] lg:w-[45%] w-full md:border-l md:pl-4">
            <div className="my-4 w-full">
              <h2 className='text-xl lg:text-2xl'>Agent in Charge</h2>
              <div className="flex mt-3 gap-3 items-center">
                <div className={`w-fit ${agentOnline && 'border-2 rounded-full border-green-600 relative'}`}>
                  {agentOnline && <div className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-600 absolute right-0 bottom-0 md:bottom-1 md:-right-1 block z-50 border-2 border-gray-50'/>}
                  <ImageAvatar className={`md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden ${property.agentInChargeImage === '' && 'border'}`} src={property.agentInChargeImage}/>
                </div>
                <div className='w-full'>
                  <p>Name: {property.agentInCharge}</p>
                  <p>Agency: PearlRealtors Agency Inc.</p>
                  <div className='w-full flex items-center justify-between mt-3'>
                    <div>
                      <Link href={'user/user_id'} className='mt-5 underline'>Check profile</Link>
                    </div>
                    <div onClick={() => setOpenChat(true)} className='cursor-pointer'>
                      <BsChatLeftText size={20}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="my-4 w-full">
              <h2 className='text-xl lg:text-2xl'>Agent Charges</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                <p className='border rounded-full py-2 px-4 capitalize'>Physical Inspection: {nairaSign}1,000.00 <span className='lg:text-base text-sm lowercase'>per hour</span></p>
                <p className='border rounded-full py-2 px-4 capitalize'>Virtual Inspection: {nairaSign}3,000.00 <span className='lg:text-base text-sm lowercase'>per hour</span></p>
              </div>
            </div>
            {openChat && 
              <>
                <hr/>
                <div className='w-full slide-in-top_3'>
                  <div className="my-4 w-full">
                    <div className='w-full flex items-center justify-between'>
                      <h2 className='text-xl lg:text-2xl'>Chat</h2>
                      <HiXMark size={22} className='cursor-pointer' onClick={() => setOpenChat(false)}/>
                    </div>
                    <div className="min-h-24 lg:min-h-32 lg:max-h-[400px] max-h-[300px] overflow-hidden overflow-y-auto py-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sunt distinctio beatae dicta enim sit! Corporis eos repellendus pariatur porro rerum at labore consequatur esse minus rem amet, natus obcaecati praesentium deleniti accusantium expedita exercitationem error? Eaque enim reiciendis porro, voluptas facilis quam modi, voluptatibus magni asperiores ad repellendus quibusdam quaerat explicabo sapiente corrupti consequatur nostrum ducimus iste repellat dolorem quia voluptatum officiis. Inventore quia nemo error. Veniam cumque pariatur iste tempora officiis ipsam temporibus, dolore vero. Minus optio aperiam labore sequi, recusandae aspernatur, saepe, mollitia numquam quibusdam iste distinctio provident blanditiis. Ipsa odit ad sint aliquam facilis, eius officiis molestias, error illum vitae incidunt assumenda quas eum animi deserunt tempore molestiae? Minima aut debitis eaque laborum consequatur ipsam. Reprehenderit velit eveniet quidem corporis, itaque labore, rem fuga magni natus perspiciatis adipisci vel ab iste maxime ad nobis expedita, qui nesciunt sed neque pariatur inventore laudantium. Consequuntur temporibus soluta accusamus amet, velit cumque asperiores sunt debitis quisquam neque deserunt rem eveniet veritatis magnam fugiat saepe quae quibusdam quam! Minus laudantium, quidem nostrum labore veniam accusantium quod libero earum rerum, pariatur enim! Est, beatae. Quos reiciendis earum quisquam, repellat iste dolore vel facere illum doloribus, nihil tenetur error ex libero dolores numquam est. Dolor veniam necessitatibus, iste repellendus libero laboriosam fuga ratione eaque nemo eos placeat? Unde voluptatibus officia cupiditate possimus, dolorem quidem, libero magni impedit corporis minus et distinctio voluptate tempora fugit earum, iste totam repellendus fugiat rem perspiciatis iusto.
                    </div>
                    <div className="w-full mt-3 flex gap-2 items-center">
                      <input type="text" className='p-2.5 border-b grow outline-none focus:outline-none bg-inherit' placeholder='type a message ...'/>
                      <div className='w-fit'>
                        <HiPaperAirplane size={30} className='cursor-pointer'/>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>

      </Box>
      {openSlider &&
        <div className='slide-in-left fixed left-0 top-0 w-full h-full bg-black/70 z-[300000] overflow-hidden lg:p-8 md:p-12 p-6'>
          <div className='absolute right-6 top-6 lg:py-2.5 lg:px-5 p-2 flex gap-3 bg-white rounded-full items-center'>
            <div className='text-lg border-r pr-3 hidden lg:block'>{currentIndex + 1} of {propertyImageList?.length}</div>
            <button>
              <HiXMark size={22} onClick={() =>{setOpenSlider(false), setCurrentIndex(0)}} />
            </button>
          </div>
          <div className="flex items-center gap-2 md:gap-4 lg:gap-5 h-full w-full justify-center">
            <div>
              {currentIndex > 0 &&
                <button className='bg-white hover:scale-110 md:w-11 md:h-11 w-10 h-10 flex items-center justify-center rounded-full' onClick={prevSlide}>
                  <LiaArrowLeftSolid size={22} />
                </button>
              }
            </div>
            <div className="h-full text-white items-center justify-center flex overflow-hidden">
              <img src={propertyImageList && propertyImageList[currentIndex]} alt="" className='h-full w-full object-contain'/>
            </div>
            <div>
              {currentIndex < lastImageIndex! &&
                <button className='bg-white hover:scale-110 md:w-11 md:h-11 w-10 h-10 flex items-center justify-center rounded-full' onClick={nextSlide}>
                  <LiaArrowRightSolid size={22} />
                </button>
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default PropertyClient
