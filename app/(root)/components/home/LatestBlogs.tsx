'use client'

import React from 'react'
import { blog, blogList } from '@/components/data/constants'
import BlogCard from '../../blogs/components/BlogCard'

type Props = {}

const LatestBlogs = (props: Props) => {
  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 mt-8 lg:mt-10 lg:gap-x-4 md:gap-x-3 gap-y-6">
      {blogList.map((blog:blog, index:number) => (
        <BlogCard key={index} 
          author={blog.author} 
          createdAt={blog.createdAt} 
          title={blog.title} 
          description={blog.description} 
          id={blog.id} 
          blogBanner={blog.imageBanner}          
        />
      ))} 
    </div>
  )
}

export default LatestBlogs