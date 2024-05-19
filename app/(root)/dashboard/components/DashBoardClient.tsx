'use client'

import Box from '@/components/shared/Box'
import React from 'react'
import { HiBars2 } from 'react-icons/hi2';
import { TbBellRinging, TbHomeHeart, TbHomePlus, TbHomeRibbon, TbLockPlus, TbMessage, TbUserEdit } from 'react-icons/tb';

type Props = {}

const DashBoardClient = (props: Props) => {
  return (
    <Box className='pt-24 lg:pt-28 flex md:gap-5 lg:gap-6 gap-3'>
      <div className="sticky top-[78px] h-full lg:w-[22%] md:w-[32%] flex flex-col md:gap-1 gap-3 w-fit">
        <div className='bg-white md:p-4 p-2.5 md:border-l-4 text-gray-400 md:rounded-r rounded md:flex md:gap-3 items-center cursor-pointer'>
          <TbHomePlus size={28} className='md:block hidden'/>
          <TbHomePlus size={24} className='md:hidden'/> 
          <h2 className='text-lg md:block hidden'>Add Property</h2>
        </div>
        <div className='bg-white md:p-4 p-2.5 md:border-l-4 text-gray-400 md:rounded-r rounded md:flex md:gap-3 items-center cursor-pointer'>
          <TbBellRinging size={28} className='md:block hidden'/>
          <TbBellRinging size={24} className='md:hidden'/> 
          <h2 className='text-lg md:block hidden'>Your Notifications</h2>
        </div>
        <div className='bg-white md:p-4 p-2.5 md:border-l-4 text-gray-400 md:rounded-r rounded md:flex md:gap-3 items-center cursor-pointer'>
          <TbMessage size={28} className='md:block hidden'/>
          <TbMessage size={24} className='md:hidden'/> 
          <h2 className='text-lg md:block hidden'>Your Messages</h2>
        </div>
        <div className='md:p-4 p-2.5 rounded-r md:flex gap-3 items-center cursor-pointer hover:bg-white hover:text-gray-400 hover:rounded'>
          <TbHomeHeart size={28} className='md:block hidden'/> 
          <TbHomeHeart size={24} className='md:hidden'/>  
          <h2 className='text-lg md:block hidden'>Liked Properties</h2>
        </div>
        <div className='md:p-4 rounded-r md:flex gap-3 items-center cursor-pointer'>
          <TbHomeRibbon size={28} className='md:block hidden'/>
          <TbHomeRibbon size={24} className='md:hidden'/>  
          <h2 className='text-lg md:block hidden'>Saved Properties</h2>
        </div>
        <div className='md:p-4 rounded-r md:flex gap-3 items-center cursor-pointer'>
          <TbUserEdit size={28} className='md:block hidden'/>
          <TbUserEdit size={24} className='md:hidden'/> 
          <h2 className='text-lg md:block hidden'>Edit Profile</h2>
        </div>
        <div className='md:p-4 rounded-r md:flex gap-3 items-center cursor-pointer'>
          <TbLockPlus size={28} className='md:block hidden'/> 
          <TbLockPlus size={24} className='md:hidden'/> 
          <h2 className='text-lg md:block hidden'>Change Password</h2>
        </div>
      </div>
      <div className='lg:w-[78%] md:w-[68%] border'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea itaque tempore ducimus dicta perspiciatis ut sed nobis vitae facilis pariatur illum eum cum, nulla ipsam consequuntur ipsa consectetur enim. Excepturi, consequuntur corporis. Dolorum nihil cum perspiciatis similique distinctio repellendus. Perferendis quibusdam quaerat mollitia possimus laboriosam accusantium architecto illum! Possimus repellat nulla velit optio ipsum inventore libero explicabo. Sapiente, consequatur corrupti rem earum nam est voluptatibus fugit voluptas laborum iure distinctio, soluta officiis vel perspiciatis sequi qui? Placeat ipsa qui dicta mollitia quis quos officiis sit cupiditate inventore nemo quas, dolore reprehenderit. Doloribus possimus accusamus aut recusandae culpa nemo quo commodi corrupti facilis quibusdam ullam totam aspernatur maiores rerum assumenda odio consequuntur necessitatibus earum sunt harum aliquam, eum saepe. Quo quisquam omnis magni eligendi enim dicta impedit laborum, magnam inventore, reiciendis labore blanditiis! Cupiditate error voluptatem eos maxime similique mollitia doloribus quos ipsam sed, explicabo, aut, dolorem dicta vero! Consequatur aliquid illum fugit. Ipsum maiores asperiores quasi. Aliquid, nam sit! Molestias, recusandae voluptas consectetur est, ipsam sint unde ab similique saepe tempora corrupti quos incidunt ducimus dolores debitis vero nesciunt consequuntur earum dolor ipsum? Eum modi exercitationem voluptatibus excepturi fugit, consequuntur quis non eveniet a illo maiores possimus assumenda aliquid aut quam, rem cupiditate iure at sequi culpa. Impedit, autem. Error voluptate tempore optio commodi recusandae ut facilis reiciendis molestiae sequi rem tempora accusantium quis, non cum, natus, id saepe consequatur. Ratione, rem! Enim optio iste similique error saepe repellat molestias? Dolorem aut a iste eligendi, vero perferendis eius, architecto dolor totam debitis soluta atque laudantium beatae aliquid? Maxime ut ex eveniet voluptates excepturi quae vitae reprehenderit impedit ratione in modi, quia optio architecto doloremque nulla illum maiores nemo soluta voluptatem iste. Suscipit laboriosam voluptas, itaque nemo modi consectetur vitae harum veniam voluptatibus asperiores possimus ex sapiente quos totam deserunt.
      </div>
    </Box>
  )
};

export default DashBoardClient;