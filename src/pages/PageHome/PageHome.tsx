import React, { useContext, useEffect, useState } from 'react'
import { CarouselHeader } from '../../components/others/carousels/CarouselHeader/CarouselHeader'
import { ContainerCarouselMultipleSlides } from '../../containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'
import { useFetch } from '../../hooks/useFetch'
import { ContextMoviesRequest } from '../../contexts/ContextMoviesRequest'
import { ContextSeriesRequest } from '../../contexts/ContextSeriesRequest'

export default function PageHome (): React.ReactNode {
  const { data: popular } = useFetch({ param: 'movie/popular' })
  const { dataMovies } = useContext(ContextMoviesRequest)
  const { dataSeries } = useContext(ContextSeriesRequest)

  // Stard: Scroll detecter
  const [sliceValue, setSliceValue] = useState(0)

  useEffect(() => {
    function detectScroll (): void {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement
      if (scrollHeight - clientHeight === scrollTop) {
        setSliceValue(5)
      }
    }
    detectScroll()
    window.addEventListener('scroll', detectScroll)

    return () => {
      window.removeEventListener('scroll', detectScroll)
    }
  }, [])
  // End: Scroll detecter

  return (
    <>
      <CarouselHeader areMovies={true} dataToShow={popular}/>
      {
        dataMovies?.slice(0, 5)?.map(item => <ContainerCarouselMultipleSlides areMovies={true} key={item.id} title={'Movies about ' + item.title} dataToShow={item.data} />)
      }
      {
        dataSeries?.slice(0, sliceValue)?.map(item => <ContainerCarouselMultipleSlides areMovies={false} key={item.id} title={'Series about ' + item.title} dataToShow={item.data} />)
      }
    </>
  )
}
