import React, { useContext } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import './CarouselHeader.css'

// import required modules
import { EffectFade } from 'swiper/modules'
import { SlideMedia } from '../../slides/SlideMedia/SlideMedia'
import { type InterfaceMedia } from '../../../../interfaces'
import { useWidthDetector } from '../../../../hooks/useWidthDetector'
import { routesConfig } from '../../../../routes/routesConfig'
import { ContextMovieTrailerModal } from '../../../../contexts/ContextMovieTrailerModal'
import { ContextSerieTrailerModal } from '../../../../contexts/ContextSerieTrailerModal'

interface CarouselProps {
  areMovies: boolean
  dataToShow: InterfaceMedia[]
}

export const CarouselHeader: React.FC<CarouselProps> = ({ areMovies, dataToShow }) => {
  const { isMobile } = useWidthDetector()
  const { setIsMovieTrailerModalOpen, setVideoID: setVideoMovieID } = useContext(ContextMovieTrailerModal)
  const { setIsSerieTrailerModalOpen, setVideoID: setVideoSerieID } = useContext(ContextSerieTrailerModal)
  const navigate = areMovies ? routesConfig.movieDetails.name : routesConfig.serieDetails.name
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
        {
          dataToShow?.map(item => (
            <SwiperSlide key={item?.id}>
              <SlideMedia
                navigate={`${navigate}${item?.id}`}
                isFull={true}
                onClick={() => {
                  if (areMovies) {
                    setIsMovieTrailerModalOpen(true)
                    setVideoMovieID(item?.id)
                  } else {
                    setIsSerieTrailerModalOpen(true)
                    setVideoSerieID(item?.id)
                  }
                }}
                title={item?.title ?? item?.name ?? 'unknown'}
                description={item.overview}
                image={isMobile ? item.poster_path : item.backdrop_path}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}
