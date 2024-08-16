import React from 'react'
import BlogLoadingSkeleton from './BlogLoadingSkeleton'

const BlogLoadingSkeletons = ({useAsAllPost}:{useAsAllPost?:boolean}) => {
  return (
    <div className={`w-full grid ${useAsAllPost ? 'xl:grid-cols-3 md:grid-cols-2': 'xl:grid-cols-4 md:grid-cols-3'} grid-cols-1 mt-8 lg:mt-10 xl:gap-x-4 md:gap-x-3 gap-y-6`}>
      <BlogLoadingSkeleton/>
      <BlogLoadingSkeleton/>
      <BlogLoadingSkeleton/>
      <div className='hidden xl:block'>
        <BlogLoadingSkeleton/>
      </div>
    </div>
  )
}

export default BlogLoadingSkeletons