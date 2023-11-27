import React from 'react'
import './SlideMedia.css'

interface SlideMediaProps {
  isFull: boolean
  title: string
  description: string
}

export const SlideMedia: React.FC<SlideMediaProps> = ({ isFull, title, description }) => {
  return (
    <article className={`SlideMedia ${isFull && 'SlideMediaFull'}`}>
      <section className="textContainer">
        <h4 className='title'> { title } </h4>
        <p className='description'> { description } </p>
      </section>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="poster" loading='lazy' />
    </article>
  )
}
