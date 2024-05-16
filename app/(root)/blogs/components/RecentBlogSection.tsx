import { blog } from '@/components/data/constants'
import ImageAvatar from '@/components/shared/ImageAvatar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiMiniArrowRight } from 'react-icons/hi2'


const RecentBlogSection = ({blogList}:{blogList:blog[]}) => {
  return (
    <div className="w-full h-fit grid md:grid-cols-2 xl:gap-4 gap-3 grid-cols-1">
      <div className="w-full mb-2 md:mb-0">
        <div className="w-full aspect-video lg:h-[18rem] h-[15rem] rounded-md relative overflow-hidden flex items-center justify-center mb-4">
          <Image src={blogList[0].imageBanner} alt='banner_1' priority fill className='object-cover'/>
          <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4 text-white flex items-center justify-between">
            <div>
              <h2 className='lg:text-xl text-lg'>{blogList[0].author}</h2>
              <p>{blogList[0].createdAt}</p>
            </div>
            <div>
              <ImageAvatar className='rounded-full overflow-hidden lg:w-11 lg:h-11 w-10 h-10' src={blogList[0].authorImage}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='line-clamp-2 lg:text-xl text-lg font-semibold'>{blogList[0].title}</p>
          <p className='line-clamp-2 text-gray-400'>{blogList[0].description}</p>
          <Link href={`/blogs/${blogList[0].id}`} className='flex items-center gap-2 font-semibold hover:text-yellow-400 text-sm lg:mt-5 mt-4'>
            CONTINUE READING
            <HiMiniArrowRight size={18}/>
          </Link>
        </div>
      </div>
      <div className="w-full md:hidden mb-2">
        <div className="w-full aspect-video lg:h-[18rem] h-[15rem] rounded-md relative overflow-hidden flex items-center justify-center mb-4">
          <Image src={blogList[1].imageBanner} alt='banner_1' priority fill className='object-cover'/>
          <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4 text-white flex items-center justify-between">
            <div>
              <h2 className='lg:text-xl text-lg'>{blogList[1].author}</h2>
              <p>{blogList[1].createdAt}</p>
            </div>
            <div>
              <ImageAvatar className='rounded-full overflow-hidden lg:w-11 lg:h-11 w-10 h-10' src={blogList[1].authorImage}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='line-clamp-2 lg:text-xl text-lg font-semibold'>{blogList[1].title}</p>
          <p className='line-clamp-2 text-gray-400'>{blogList[1].description}</p>
          <Link href={`/blogs/${blogList[1].id}`} className='flex items-center gap-2 font-semibold hover:text-yellow-400 text-sm lg:mt-5 mt-4'>
            CONTINUE READING
            <HiMiniArrowRight size={18}/>
          </Link>
        </div>
      </div>
      <div className="w-full md:hidden mb-2">
        <div className="w-full aspect-video lg:h-[18rem] h-[15rem] rounded-md relative overflow-hidden flex items-center justify-center mb-4">
          <Image src={blogList[2].imageBanner} alt='banner_1' priority fill className='object-cover'/>
          <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4 text-white flex items-center justify-between">
            <div>
              <h2 className='lg:text-xl text-lg'>{blogList[2].author}</h2>
              <p>{blogList[2].createdAt}</p>
            </div>
            <div>
              <ImageAvatar className='rounded-full overflow-hidden lg:w-11 lg:h-11 w-10 h-10' src={blogList[2].authorImage}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='line-clamp-2 lg:text-xl text-lg font-semibold'>{blogList[2].title}</p>
          <p className='line-clamp-2 text-gray-400'>{blogList[2].description}</p>
          <Link href={`/blogs/${blogList[2].id}`} className='flex items-center gap-2 font-semibold hover:text-yellow-400 text-sm lg:mt-5 mt-4'>
            CONTINUE READING
            <HiMiniArrowRight size={18}/>
          </Link>
        </div>
      </div>
      <div className="md:grid w-full grid-rows-2 xl:gap-4 gap-3 hidden">
        <div className="w-full flex gap-3">
          <div className="w-[40%] h-full relative rounded-md overflow-hidden flex items-center justify-center">
            <Image src={blogList[1].imageBanner} alt='banner_image' fill priority className='object-cover'/>
            <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4 text-white flex items-center justify-between">
              <div>
                <h2>{blogList[1].author}</h2>
                <p>{blogList[1].createdAt}</p>
              </div>
              <div>
                <ImageAvatar className='rounded-full overflow-hidden w-10 h-10' src={blogList[1].authorImage}/>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-between pb-4">
            <p className='line-clamp-2 lg:text-xl text-lg font-semibold'>{blogList[1].title}</p>
            <p className='line-clamp-3 text-gray-400'>{blogList[1].description}</p>
            <Link href={`/blogs/${blogList[1].id}`} className='flex items-center gap-2 font-semibold hover:text-yellow-400 text-sm lg:mt-5 mt-4'>
              CONTINUE READING
              <HiMiniArrowRight size={18}/>
            </Link>
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-[40%] h-full relative rounded-md overflow-hidden flex items-center justify-center">
            <Image src={blogList[2].imageBanner} alt='banner_image' fill priority className='object-cover'/>
            <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4 text-white flex items-center justify-between">
              <div>
                <h2>{blogList[2].author}</h2>
                <p>{blogList[2].createdAt}</p>
              </div>
              <div>
                <ImageAvatar className='rounded-full overflow-hidden w-10 h-10' src={blogList[2].authorImage}/>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-between pb-4">
            <p className='line-clamp-2 lg:text-xl text-lg font-semibold'>{blogList[2].title}</p>
            <p className='line-clamp-3 text-gray-400'>{blogList[2].description}</p>
            <Link href={`/blogs/${blogList[2].id}`} className='flex items-center gap-2 font-semibold hover:text-yellow-400 text-sm lg:mt-5 mt-4'>
              CONTINUE READING
              <HiMiniArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RecentBlogSection