import React, { useContext } from 'react'
import './ContainerMediaDetails.css'

import { API_TMDB_CONTEXT } from '../../apis/API_TMDB'
import { useWidthDetector } from '../../hooks/useWidthDetector'
import { type InterfaceMedia } from '../../interfaces'

interface ContainerProps {
  dataToShow: InterfaceMedia
}

export const ContainerMediaDetails: React.FC<ContainerProps> = ({ dataToShow }) => {
  const { IMAGE_URL, IMAGE_URL_HD } = useContext(API_TMDB_CONTEXT)
  const { isMobile } = useWidthDetector()

  const voteAverage = parseFloat(dataToShow?.vote_average?.toFixed(1))

  if (typeof (dataToShow) === 'object' && dataToShow !== null) {
    return (
      <article className='ContainerMediaDetails'>

        <section className="header">

          <h3 className="title"> {dataToShow?.title ?? dataToShow?.name} </h3>

          <img src={isMobile ? IMAGE_URL + dataToShow.poster_path : IMAGE_URL_HD + dataToShow.backdrop_path } alt={dataToShow?.title + 'poster'} loading='lazy' />

        </section>

        <section className="content">

            <div className="voteAverage">
              <h6>Vote Average: </h6>
              <p style={{ color: voteAverage < 4 ? 'var(--color-primary)' : (voteAverage >= 4 && voteAverage < 7 ? 'var(--color-warning)' : 'var(--color-success)') }
              }> {voteAverage} </p>
            </div>

            <section className='mainContent'>
              <h4 className="tagline"> {dataToShow?.tagline} </h4>
              <p className="description"> {dataToShow?.overview} </p>
            </section>

            <div className="genres">
              <h6>Genres:</h6>
              { dataToShow?.genres?.map(item => <p key={item?.id}> {item?.name} </p>) }
            </div>

            <div className="releaseDate">
              <h6>Release Date:</h6>
              <p> { dataToShow?.release_date ?? 'Still on air' } </p>
            </div>

            <div className="runTime">
              <h6>Run Time:</h6>
              <p> { dataToShow?.runtime ?? dataToShow?.episode_run_time } minutes </p>
            </div>

            <div className="companies">
              <h6>Companies: </h6>
              { dataToShow?.production_companies?.map(item => <p key={item?.id}> {item?.name} </p>) }
            </div>

            <div className="languages">
              <h6>Languages: </h6>
              { dataToShow?.spoken_languages?.map((item, index) => <p key={index}> {item?.english_name} </p>) }
            </div>

        </section>

      </article>
    )
  } else {
    return (
      <p>loading</p>
    )
  }
}
