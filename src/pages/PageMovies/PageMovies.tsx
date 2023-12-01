import React, { useContext, useEffect, useState } from 'react'
import { CarouselHeader } from '../../components/others/carousels/CarouselHeader/CarouselHeader'
import { ContainerCarouselMultipleSlides } from '../../containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'
import { useFetch } from '../../hooks/useFetch'
import { ContextMoviesRequest } from '../../contexts/ContextMoviesRequest'

export default function PageMovies (): React.ReactNode {
  const { data: trendingMovies } = useFetch({ param: 'trending/movie/week' })
  const { dataMovies } = useContext(ContextMoviesRequest)

  // Stard: Scroll detecter
  const [sliceValue, setSliceValue] = useState(2)

  useEffect(() => {
    function detectScroll (): void {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement
      console.log(scrollHeight, 'scroll height')
      console.log(clientHeight, 'client height')
      console.log(scrollTop, 'scrolltop')
      if (scrollHeight - clientHeight - scrollTop < 200) {
        setSliceValue(prevState => prevState + 2)
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
    <article>
      <CarouselHeader areMovies={true} dataToShow={trendingMovies}/>
      {
        dataMovies.slice(0, sliceValue)?.map(item => (
          <ContainerCarouselMultipleSlides areMovies={true} key={item.id} title={'Movies about ' + item.title} dataToShow={item.data} />
        ))
      }
    </article>
  )
}
