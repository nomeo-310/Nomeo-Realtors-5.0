import Box from '@/components/shared/Box'
import React from 'react'
import Header from './Header'

type Props = {}

const LatestBlogSection = (props: Props) => {
  return (
    <Box>
      <Header
        mainTitle='Our Latest Blogs'
        subTitle="Your one-stop shop for navigating the exciting and ever-changing world of Lagos real estate. Whether you're a seasoned investor, a first-time homebuyer, a curious renter, or simply someone with a dream of owning property, we've got you covered. Here at Nomeo Suites, we're passionate about empowering you with the knowledge and insights you need to make informed decisions on your real estate journey."
      />
    </Box>
  )
}

export default LatestBlogSection