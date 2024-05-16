'use client'

import { blog } from '@/components/data/constants'
import Box from '@/components/shared/Box'
import ImageAvatar from '@/components/shared/ImageAvatar'
import Image from 'next/image'
import React from 'react'

type Props = {
  blog: blog
}

const SingleBlogClient = ({blog}: Props) => {
  console.log(blog)
  return (
    <Box className="pt-16 lg:pt-20">
      <div className="mb-8">
        <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold mt-8 mb-4'>{blog.title}</h2>
        <div className='mb-4 flex items-center gap-3'>
          <ImageAvatar className='rounded-full w-10 h-10 border overflow-hidden' src={blog.authorImage}/>
          <div className='text-lg border-r pr-3'>{blog.author}</div>
          <div className='text-lg'>{blog.createdAt}</div>
        </div>
        <div className="w-full aspect-video relative flex items-start flex-col justify-start rounded-lg overflow-hidden lg:h-[38rem] mb-6">
          <Image src={blog.imageBanner} alt='banner_image' priority fill className='object-cover'/>
        </div>
        <p className='lg:text-xl md:text-lg'>{blog.description}</p>
        {blog.blogContent.quote &&
          <div className="my-6 lg:p-10 p-6 md:p-8 bg-neutral-200 rounded-lg">
            <p className='lg:text-xl md:text-lg italic'>{blog.blogContent.quote.content}</p>
            <p className='text-right lg:text-xl md:text-lg mt-4 font-semibold'>{blog.blogContent.quote.author}</p>
          </div>
        }
        { blog.blogContent.paragraph && <p className='lg:text-xl md:text-lg mb-8'>{blog.blogContent.paragraph}</p> }
        {blog.blogContent.content.map((item, index:number) => (
          <div className='mb-4 flex flex-col gap-1' key={index}>
            {item.header && <h2 className='lg:text-xl md:text-lg font-semibold'>{item.header}</h2>}
            <p className='lg:text-xl md:text-lg'>{item.content}</p>
          </div>
        ))}
      </div>
      <hr/>
    </Box>
  )
}

export default SingleBlogClient