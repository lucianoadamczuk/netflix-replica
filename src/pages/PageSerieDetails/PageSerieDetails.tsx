import React from 'react'
import { ContainerMediaDetails } from '../../containers/ContainerMediaDetails/ContainerMediaDetails'
import { useParams } from 'react-router-dom'
import { ContainerError } from '../../containers/ContainerError/ContainerError'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import { useFetch } from '../../hooks/useFetch'
import { ContainerCarouselMultipleSlides } from '../../containers/ContainerCarouselMultipleslides/ContainerCarouselMultipleSlides'

export default function PageSerieDetails (): React.ReactNode {
  const params = useParams()
  const { data } = useFetchDetails({ param: `tv/${params.id}` })
  const { data: recommendedTitles } = useFetch({ param: `tv/${params.id}/recommendations` })

  if (data !== undefined) {
    return (
      <>
        <ContainerMediaDetails dataToShow={data}/>
        <ContainerCarouselMultipleSlides areMovies={false} title='Recomended titles' dataToShow={recommendedTitles}/>
      </>
    )
  } else {
    return (
      <ContainerError/>
    )
  }
}
