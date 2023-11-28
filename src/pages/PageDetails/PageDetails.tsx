import React from 'react'
import './PageDetails.css'
export const PageDetails: React.FC = () => {
  return (
    <article className='PageDetails'>

      <section className="header">

        <h3 className="title">title</h3>

        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="poster" loading='lazy' />

      </section>

      <section className="content">

          <div className="voteAverage">
            <h6>Vote Average: </h6>
            <p>0</p>
          </div>

          <section className='mainContent'>
            <h4 className="tagline">tagline</h4>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias dolor eum provident, placeat iusto possimus nihil doloremque ducimus expedita quibusdam excepturi quam culpa, consectetur hic, sunt eligendi velit tenetur?</p>
          </section>

          <div className="genres">
            <h6>Genres:</h6>
            <p></p>
          </div>

          <div className="releaseDate">
            <h6>Release Date:</h6>
            <p></p>
          </div>

          <div className="runTime">
            <h6>Run Time:</h6>
            <p></p>
          </div>

          <div className="companies">
            <h6>Companies: </h6>
            <p></p>
          </div>

          <div className="languages">
            <h6>Languages: </h6>
            <p></p>
          </div>

      </section>

    </article>
  )
}
