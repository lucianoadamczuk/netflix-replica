import React from 'react'
import { CarouselHeader } from '../../components/others/carousels/CarouselHeader/CarouselHeader'
import { ContainerCarouselMultipleSlides } from '../../containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'

export const PageHome: React.FC = () => {
  return (
    <>
      <CarouselHeader/>
      <ContainerCarouselMultipleSlides/>
      <ContainerCarouselMultipleSlides/>
      <ContainerCarouselMultipleSlides/>
    </>
  )
}
