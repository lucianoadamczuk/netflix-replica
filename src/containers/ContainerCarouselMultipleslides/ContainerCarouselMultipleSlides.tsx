import React from 'react'
import './ContainerCarouselMultipleSlides.css'
import { CarouselMultipleSlides } from '../../components/others/carousels/CarouselMultipleSlides/CarouselMultipleSlides'

export const ContainerCarouselMultipleSlides: React.FC = () => {
  return (
    <article className='ContainerCarouselMultipleSlides'>
      <h5 className='title'> type of content </h5>
      <CarouselMultipleSlides/>
    </article>
  )
}
