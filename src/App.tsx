import React from 'react'
import { CarouselHeader } from './components/others/carousels/CarouselHeader/CarouselHeader'
import { ContainerCarouselMultipleSlides } from './containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'

function App() {
  return (
    <>
      <CarouselHeader/>
      <ContainerCarouselMultipleSlides/>
      <ContainerCarouselMultipleSlides/>
      <ContainerCarouselMultipleSlides/>
      <ContainerCarouselMultipleSlides/>
    </>
  )
}

export default App
