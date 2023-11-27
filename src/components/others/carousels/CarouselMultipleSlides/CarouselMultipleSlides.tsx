import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import './CarouselMultipleSlides.css'
import { SlideMedia } from '../../slides/SlideMedia/SlideMedia'

export const CarouselMultipleSlides: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3.3
          },
          768: {
            slidesPerView: 4.3
          },
          1024: {
            slidesPerView: 5.3
          }
        }}
        className="CarouselMultipleSlides"
      >
        <SwiperSlide>
          <SlideMedia
            isFull={false}
            title='movie or serie title'
            description='movie or serie description'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia
            isFull={false}
            title='movie or serie title'
            description='movie or serie description'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia
            isFull={false}
            title='movie or serie title'
            description='movie or serie description'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
