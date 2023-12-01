import React from 'react'
import './ContainerCarouselMultipleSlides.css'
import { CarouselMultipleSlides } from '../../components/others/carousels/CarouselMultipleSlides/CarouselMultipleSlides'
import { type InterfaceMedia } from '../../interfaces'

interface ContainerProps {
  areMovies: boolean
  title: string
  dataToShow: InterfaceMedia[]
}

export const ContainerCarouselMultipleSlides: React.FC<ContainerProps> = ({ areMovies, title, dataToShow }) => {
  if (dataToShow?.length > 0) {
    return (
      <article className='ContainerCarouselMultipleSlides'>
        <h5 className='title'> { title } </h5>
        <CarouselMultipleSlides areMovies={areMovies} dataToShow={dataToShow}/>
      </article>
    )
  }
}
