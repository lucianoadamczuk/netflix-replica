import React, { useContext } from 'react'
import { API_TMDB_CONTEXT } from '../../../../apis/API_TMDB'
import { useWidthDetector } from '../../../../hooks/useWidthDetector'
import { Button } from '../../../ui/Button/Button'
import { Link } from 'react-router-dom'
import './SlideMedia.css'

interface SlideMediaProps {
  isFull: boolean
  navigate: string
  onClick: () => void
  title: string
  description?: string
  image: string
}

export const SlideMedia: React.FC<SlideMediaProps> = ({ isFull, navigate, onClick, title, description, image }) => {
  const { IMAGE_URL, IMAGE_URL_HD } = useContext(API_TMDB_CONTEXT)
  const { isMobile } = useWidthDetector()

  return (
      <article className={`SlideMedia ${isFull && 'SlideMediaFull'}`}>
        <section className="textContainer">
          <h4 className='title'> { title } </h4>
          <p className='description'> { description } </p>

          <div className="buttonsContainer">
            <Button primary={true} title='Watch trailer' onClick={onClick} />
            <Link to={navigate}>
              <Button primary={false} title='More information'/>
            </Link>
          </div>
        </section>
        <img src={isMobile ? IMAGE_URL + image : IMAGE_URL_HD + image} alt={title + ' - poster'} loading='lazy' />
      </article>
  )
}
