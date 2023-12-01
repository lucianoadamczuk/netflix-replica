import React, { useContext, useEffect, useState } from 'react'
import { CarouselHeader } from '../../components/others/carousels/CarouselHeader/CarouselHeader'
import { ContainerCarouselMultipleSlides } from '../../containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'
import { useFetch } from '../../hooks/useFetch'
import { ContextSeriesRequest } from '../../contexts/ContextSeriesRequest'

export default function PageSeries (): React.ReactNode {
  const { data: trendingSeries } = useFetch({ param: 'trending/tv/week' })
  const { dataSeries } = useContext(ContextSeriesRequest)

  // Start: scroll detecter
  const [sliceValue, setSliceValue] = useState(2)
  useEffect(() => {
    function detectScroll (): void {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement
      if (scrollHeight - clientHeight - scrollTop < 200) {
        setSliceValue(prevState => prevState + 2)
      }
    }
    window.addEventListener('scroll', detectScroll)
    return () => {
      window.removeEventListener('scroll', detectScroll)
    }
  }, [])

  // End: scroll detecter

  return (
    <>
      <CarouselHeader areMovies={false} dataToShow={trendingSeries}/>
      {
        dataSeries.slice(0, sliceValue)?.map(item => <ContainerCarouselMultipleSlides areMovies={false} key={item.id} title={'Series about ' + item.title} dataToShow={item.data} />)
      }
    </>
  )
}
