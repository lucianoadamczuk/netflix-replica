import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import './CarouselHeader.css'

// import required modules
import { EffectFade } from 'swiper/modules'
import { SlideMedia } from '../../slides/SlideMedia/SlideMedia'

export const CarouselHeader: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[EffectFade]}
        className="CarouselHeader"
      >
        <SwiperSlide>
          <SlideMedia
            isFull={true}
            title='movie or serie title'
            description='movie or serie description'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
