'use client'

import Box from '@/components/shared/Box'
import ImageAvatar from '@/components/shared/ImageAvatar'
import { formatDate } from '@/hooks/formatTime'
import { featuredBlogProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import parse from 'html-react-parser'

type Props = {
  blog: featuredBlogProps
}

const SingleBlogClient = ({blog}: Props) => {

  return (
    <Box className="pt-16 lg:pt-20">
      <div className="mb-8">
        <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold mt-8 mb-4'>{blog.blogTitle}</h2>
        <div className='mb-4 flex items-center gap-3'>
          <ImageAvatar className='rounded w-10 h-10 border overflow-hidden' src={blog.blogAuthor.image}/>
          <div className='lg:text-lg border-r pr-3'>{blog.blogAuthor.name}</div>
          <div className='lg:text-lg border-r pr-3'>{formatDate(blog.createdAt)}</div>
          <div className='lg:text-lg flex items-center gap-2'>
            <BsEyeFill size={22}/>
            {blog.totalReadingTime.toPrecision(2)} mins read
          </div>
        </div>
        <div className="w-full aspect-video relative flex items-start flex-col justify-start rounded overflow-hidden lg:h-[38rem] mb-6">
          <Image src={blog.blogpostBanner.secure_url} alt='banner_image' priority fill className='object-cover'/>
        </div>
        <div className='blog-content'>
          {parse(blog.content)}
        </div>
      </div>
      <hr/>
      <div className='py-8 flex gap-3 lg:gap-5 w-full'>
        <div className="w-fit">
          <ImageAvatar className='w-28 h-28 lg:w-40 lg:h-40 md:w-36 md:h-36 overflow-hidden rounded border' src={blog.blogAuthor.image}/>
        </div>
        <div className='flex justify-between flex-col gap-2 grow'>
          <h2 className='lg:text-xl md:text-lg'>{blog.blogAuthor.name}</h2>
          <p className='line-clamp-3 lg:line-clamp-4 lg:text-lg'>{blog.blogAuthor.agentBio}</p>
        </div>
      </div>
    </Box>
  )
}

export default SingleBlogClient