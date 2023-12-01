import React, { useContext } from 'react'
import { ContainerError } from '../../containers/ContainerError/ContainerError'
import { useFetchSerieTrailer } from '../../hooks/useFetchSerieTrailer'
import './SerieTrailerModal.css'
import { ContextSerieTrailerModal } from '../../contexts/ContextSerieTrailerModal'

export const SerieTrailerModal: React.FC = () => {
  const { isSerieTrailerModalOpen, setIsSerieTrailerModalOpen, videoID } = useContext(ContextSerieTrailerModal)
  const { serieVideoURL } = useFetchSerieTrailer({ param: videoID?.toString() })

  if (serieVideoURL === undefined) {
    return <ContainerError/>
  } else {
    return (
      <article className='SerieTrailerModal' style={{ display: isSerieTrailerModalOpen ? 'flex' : 'none' }}>

        <div className="button" onClick={() => { setIsSerieTrailerModalOpen(false) }} > X </div>

        <iframe
          src={serieVideoURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
        ></iframe>

      </article>
    )
  }
}
