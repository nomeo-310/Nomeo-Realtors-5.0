'use client'

import React from 'react'
import { aboutUsData } from '@/components/data/constants'
import TeamMemberCard from './TeamMemberCard';

type itemProps = {
  name:string; 
  role:string;
  imageUrl: string; 
  instagramUrl: string;
  linkedinUrl: string;
  threadsUrl: string;
} 

const TeamSection = () => {
  return (
    <React.Fragment>
      <h2 className='lg:text-4xl text-2xl mb-5 mt-10'>Meet our team</h2>
      <p className='lg:text-xl md:text-lg mb-2'>{aboutUsData.meetTheTeam.subtitle}</p>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 items-center justify-center">
        {aboutUsData.meetTheTeam.teamList.map((item:itemProps) => (
          <TeamMemberCard key={item.name} {...item}/>
        ))}
      </div>
    </React.Fragment>
  )
};

export default TeamSection