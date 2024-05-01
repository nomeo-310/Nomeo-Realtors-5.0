'use client'

import React from 'react'
import OurServiceCard from './OurServiceCard';
import { CiWallet , CiLocationOn, CiPercent } from "react-icons/ci"

const OurServices = () => {
  return (
    <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-2 lg:gap-4">
      <OurServiceCard
        title='Sellout Properties'
        icon={CiWallet}
        subTitle="As a deeply rooted Lagos agency, we possess an unrivaled understanding of the local market. This translates into expert advice on neighborhoods, pricing trends, and property values."
        id='#sell'
      />
      <OurServiceCard
        title='Rentout Properties'
        icon={CiLocationOn}
        subTitle='We understand that your real estate needs are unique. We take the time to understand your specific goals, budget, and preferences, providing personalized guidance and support throughout the entire process.'
        id='#rent'
      />
      <OurServiceCard
        title='Properties Consultations'
        icon={CiPercent}
        subTitle='We believe in transparency, integrity, and exceeding client expectations. Our commitment to these values has earned us a reputation for excellence in the Lagos real estate market.'
        id='#help'
      />
    </div>
  )
};

export default OurServices