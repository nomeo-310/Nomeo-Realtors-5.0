'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import ImageAvatar from '@/components/shared/ImageAvatar'

type blogCardProps = {
  author: string
  createdAt: string
  title: string
  description: string
  id: string
  blogBanner: string
}

const BlogCard = ({author, createdAt, title, description, id, blogBanner}: blogCardProps) => {
  return (
    <div className="w-full flex flex-col gap-2 cursor-pointer group">
      <div className="md:aspect-square xl:h-[280px] lg:h-[250px] md:h-[230px] h-[220px] aspect-video flex items-center justify-center overflow-hidden rounded-md">
        <div className='w-full h-full relative bg-neutral-600'>
          <Image src={blogBanner} alt='blog_art' fill className='object-cover group-hover:scale-110' priority/>
          <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4 text-white ease-in-out  -translate-x-[100vw] group-hover:translate-x-0 group-active:translate-x-0 duration-500 flex items-center justify-between">
            <div>
              <h2 className='lg:text-xl text-lg'>{author}</h2>
              <p>{createdAt}</p>
            </div>
            <div>
              <ImageAvatar className='rounded-full overflow-hidden lg:w-11 lg:h-11 w-10 h-10'/>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:mt-3 mt-2 flex gap-2 flex-col'>
        <p className='line-clamp-2 lg:text-xl text-lg font-semibold'>{title}</p>
        <p className='line-clamp-2 text-gray-400'>{description}</p>
        <Link href={`/blogs/${id}`} className='flex items-center gap-2 font-semibold hover:text-yellow-400'>
          Read post
          <HiMiniArrowUpRight size={18}/>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard