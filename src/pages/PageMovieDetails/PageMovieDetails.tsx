import React from 'react'
import { ContainerMediaDetails } from '../../containers/ContainerMediaDetails/ContainerMediaDetails'
import { useParams } from 'react-router-dom'
import { ContainerError } from '../../containers/ContainerError/ContainerError'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import { ContainerCarouselMultipleSlides } from '../../containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'
import { useFetch } from '../../hooks/useFetch'

export default function PageMovieDetails (): React.ReactNode {
  const params = useParams()
  const { data } = useFetchDetails({ param: `movie/${params.id}` })
  const { data: recommendedTitles } = useFetch({ param: `movie/${params.id}/recommendations` })

  if (data !== undefined) {
    return (
      <>
        <ContainerMediaDetails dataToShow={data}/>
        <ContainerCarouselMultipleSlides areMovies={true} title='Recomended titles' dataToShow={recommendedTitles}/>
      </>
    )
  } else {
    <ContainerError/>
  }
}
