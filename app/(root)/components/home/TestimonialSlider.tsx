'use client'


import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import SwiperCore from 'swiper';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import TestimonialCard from './TestimonialCard';
import { testimony, testimonyList } from '@/components/data/constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


type testimonialSliderProps = {
  useButton?: boolean 
  testimonials: any[]
}

const TestimonialSlider = ({useButton, testimonials}:testimonialSliderProps) => {

  const sliderSettings = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  };

  const swiperRef = React.useRef<SwiperCore>();
  return (
    <div className='mt-8 lg:mt-10 lg:-mx-10 -mx-4'>
      <div className='flex lg:gap-2 gap-1'>
        <button onClick={() => swiperRef.current?.slidePrev()} className={`${useButton ? 'grow w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-primary/50': ''}`}>
          { useButton ? <HiChevronLeft size={30} /> : <CiCircleChevLeft size={45} /> }
        </button>
        <Swiper 
          breakpoints={sliderSettings}
          modules={[Navigation, Pagination, A11y]}
          onBeforeInit={(swiper) => {swiperRef.current = swiper;}}
          loop={true}
        >
          { testimonials.map((t:testimony, index:number) => (
          <SwiperSlide key={`slide_${index}`}>
            <TestimonialCard
              testimony={t.testimony}
              profileImage={t.profileImage}
              name={t.name}
              title={t.title}
              career={t.career}
            />
          </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slideNext()} className={`${useButton ? 'grow w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-primary/50': ''}`}>
          { useButton ? <HiChevronRight size={30} /> : <CiCircleChevRight size={45} /> }
        </button>
      </div>
    </div>
  )
};

export default TestimonialSlider