import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlideMedia } from '../../components/others/slides/SlideMedia/SlideMedia'
import './PageSearch.css'
import { ContextSearch } from '../../contexts/ContextSearch'
import { ContainerErrorSearching } from '../../containers/ContainerErrorSearching/ContainerErrorSearching'
import { useSearch } from '../../hooks/useSearch'

// Instructions:
//    The request returns an objetc with 3 properties: results (it has the movies or series), total_pages (pages availables) and total_results (max number of series or movies availables)
//    Every time the user scrolls to the bottom of the page, the pagination for movies and tv, if they exist, will increase 1
//    It will occurs until results === total_results

export default function PageSearch (): React.ReactNode {
  const { dataToSearch } = useContext(ContextSearch)
  const [moviesPagination, setMoviesPagination] = useState(1)
  const [seriesPagination, setSeriesPagination] = useState(1)
  const { data: moviesData } = useSearch({ param: 'search/movie', query: dataToSearch, page: moviesPagination })
  const { data: seriesData } = useSearch({ param: 'search/tv', query: dataToSearch, page: seriesPagination })

  // Start: scroll detecter
  useEffect(() => {
    function detectScroll (): void {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement
      if (scrollHeight - clientHeight === scrollTop && moviesData?.results?.length < moviesData?.total_results) {
        setMoviesPagination(prevState => prevState + 1)
      }
      if (scrollHeight - clientHeight === scrollTop && seriesData?.results?.length < seriesData?.total_results) {
        setSeriesPagination(prevState => prevState + 1)
      }
    }
    detectScroll()
    window.addEventListener('scroll', detectScroll)

    return () => {
      window.removeEventListener('scroll', detectScroll)
    }
  }, [moviesData, seriesData])
  // End: scroll detecter

  // First Case: avoids that the user gets into the search page and doesn't find content
  // Second Case: if there isn't match
  // Third Case: success
  if (dataToSearch.length === 0) {
    return (
      <ContainerErrorSearching emptySearch={true} />
    )
  } else if (moviesData?.results?.length === 0 && seriesData?.results?.length === 0) {
    <ContainerErrorSearching emptySearch={false} />
  } else {
    return (
      <article className="PageSearch">
        {
          moviesData?.results?.map(item => (
            <Link to={`/movie/details/${item.id}`} key={item.id}>
              <SlideMedia
                isFull={false}
                title={item.title ?? item.name ?? 'Unknown'}
                image={item.poster_path}
              />
            </Link>
          ))
        }
        {
          seriesData?.results?.map(item => (
            <Link to={`/serie/details/${item.id}`} key={item.id}>
              <SlideMedia
                isFull={false}
                title={item.title ?? item.name ?? 'Unknown'}
                image={item.poster_path}
              />
            </Link>
          ))
        }
      </article>
    )
  }
}
