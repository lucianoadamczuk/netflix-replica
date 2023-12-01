import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import './CarouselMultipleSlides.css'
import { SlideMedia } from '../../slides/SlideMedia/SlideMedia'
import { type InterfaceMedia } from '../../../../interfaces'
import { Link } from 'react-router-dom'
import { routesConfig } from '../../../../routes/routesConfig'

interface CarouselProps {
  areMovies: boolean
  dataToShow: InterfaceMedia[]
}

export const CarouselMultipleSlides: React.FC<CarouselProps> = ({ areMovies, dataToShow }) => {
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
          },
          1500: {
            slidesPerView: 6.3
          }
        }}
        className="CarouselMultipleSlides"
      >
        {
          dataToShow?.map(item => (
            <SwiperSlide key={item.id}>
              <Link to={areMovies ? routesConfig.movieDetails.name + item.id : routesConfig.serieDetails.name + item.id}>
                <SlideMedia
                  isFull={false}
                  title={item?.title ?? item?.name ?? 'unknown'}
                  description={item?.overview}
                  image={item.backdrop_path}
                />
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}
