import React from 'react'
import './Page404.css'
export const Page404: React.FC = () => {
  return (
    <article className='Page404'>
      <div className="textContainer">
        <h3 className='title'>Ups! <br /> We are so sorry</h3>
        <p className='description'>It seems to be that the page doesn&acute;t exists </p>
      </div>
      <p>go back</p>
    </article>
  )
}
