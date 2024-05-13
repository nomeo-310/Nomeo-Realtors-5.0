'use client'

import React from 'react'
import OurServiceCard from './OurServiceCard';
import { CiWallet , CiLocationOn, CiPercent } from "react-icons/ci"

const OurServices = () => {
  return (
    <div className="mt-8 lg:mt-10 grid md:grid-cols-3 grid-cols-1 gap-2 lg:gap-4">
      <OurServiceCard
        title='Property Search & Acquisition'
        icon={CiWallet}
        subTitle="This involves assisting clients in finding their ideal property, whether for purchase or rent. Real estate agents leverage their market expertise and local knowledge to source suitable properties, schedule viewings, and guide clients through the selection process."
        id='#acquisition'
      />
      <OurServiceCard
        title='Sales & Marketing'
        icon={CiLocationOn}
        subTitle="Real estate agencies support sellers in achieving a successful sale of their property.  This includes tasks like property valuation, developing a marketing strategy, conducting open houses, managing negotiations, and handling the closing process."
        id='#sales'
      />
      <OurServiceCard
        title='Property Management'
        icon={CiPercent}
        subTitle="Real estate agencies offer property management services to investors who own rental properties.  This can encompass tasks like tenant screening, rent collection, maintenance coordination, lease renewals, and ensuring compliance with relevant regulations."
        id='#management'
      />
    </div>
  )
};

export default OurServices