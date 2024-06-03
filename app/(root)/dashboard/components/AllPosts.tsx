'use client'

import React from 'react'
import AllBlogs from '../../blogs/components/AllBlogs'
import { blogList } from '@/components/data/constants'
import LoadMoreButton from '@/components/shared/LoadMoreButton'

type Props = {}

const AllPosts = ({setActiveTab}:{setActiveTab: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className='w-full h-full flex slide-in-left'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full">
        <div className='flex w-full lg:gap-6 gap-4 cursor-pointer'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>All Posts</h2>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('create-post')}>Create Post</h2>
        </div>
        <div>
          <AllBlogs blogList={blogList} useAsAllPost/>
          <LoadMoreButton label="Load more" loadmoreFunction={() => {}}/>
        </div>
      </div>
    </div>
  )
}

export default AllPosts