'use client'


import React from 'react'
import Box from '@/components/shared/Box'
import Header from './Header'
import LatestBlogs from './LatestBlogs'

type Props = {}

const LatestBlogSection = (props: Props) => {
  return (
    <Box className='pb-0 lg:pb-0 lg:pt-20 pt-16' id='latestBlogs'>
      <Header
        mainTitle='Our Latest Blogs'
        link='/blogs'
        linkTitle='Read all...'
        subTitle="Your one-stop shop for navigating the exciting and ever-changing world of Lagos real estate. Whether you're a seasoned investor, a first-time homebuyer, a curious renter, or simply someone with a dream of owning property, we've got you covered. Here at Nomeo Suites, we're passionate about empowering you with the knowledge and insights you need to make informed decisions on your real estate journey."
      />
      <LatestBlogs/>
    </Box>
  )
}

export default LatestBlogSection