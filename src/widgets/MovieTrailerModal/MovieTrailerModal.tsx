import React, { useContext } from 'react'

import { useFetchMovieTrailer } from '../../hooks/useFetchMovieTrailer'
import { ContainerError } from '../../containers/ContainerError/ContainerError'
import './MovieTrailerModal.css'
import { ContextMovieTrailerModal } from '../../contexts/ContextMovieTrailerModal'

export const MovieTrailerModal: React.FC = () => {
  const { isMovieTrailerModalOpen, setIsMovieTrailerModalOpen, videoID } = useContext(ContextMovieTrailerModal)
  const { movieVideoURL } = useFetchMovieTrailer({ param: videoID?.toString() })

  if (movieVideoURL === undefined) {
    return <ContainerError/>
  } else {
    return (
      <article className='MovieTrailerModal' style={{ display: isMovieTrailerModalOpen ? 'flex' : 'none' }}>

        <div className="button" onClick={() => { setIsMovieTrailerModalOpen(false) }} > X </div>

        <iframe id='algo'
          src={isMovieTrailerModalOpen ? movieVideoURL : undefined}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
        ></iframe>

      </article>
    )
  }
}
