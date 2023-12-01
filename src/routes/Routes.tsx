import React, { useEffect, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { routesConfig } from './routesConfig'

const PageHome = lazy(async () => await import('../pages/PageHome/PageHome'))
const PageMovies = lazy(async () => await import('../pages/PageMovies/PageMovies'))
const PageSeries = lazy(async () => await import('../pages/PageSeries/PageSeries'))
const PageMovieDetails = lazy(async () => await import('../pages/PageMovieDetails/PageMovieDetails'))
const PageSerieDetails = lazy(async () => await import('../pages/PageSerieDetails/PageSerieDetails'))
const PageSearch = lazy(async () => await import('../pages/PageSearch/PageSearch'))
const Page404 = lazy(async () => await import('../pages/Page404/Page404'))

export const AppRoutes: React.FC = () => {
  const location = useLocation()
  useEffect(() => {
    function scrollTop (): void {
      window.scrollTo(0, 0)
    }
    scrollTop()
  }, [location.pathname])

  return (
    <Routes>
      <Route path={routesConfig.home.path} element={ <PageHome/> }/>
      <Route path={routesConfig.movies.path} element={ <PageMovies/> }/>
      <Route path={routesConfig.series.path} element={ <PageSeries/> }/>
      <Route path={routesConfig.movieDetails.path} element={ <PageMovieDetails/> }/>
      <Route path={routesConfig.serieDetails.path} element={ <PageSerieDetails/>} />
      <Route path={routesConfig.search.path} element={ <PageSearch/> } />
      <Route path='*' element={ <Page404/> } />
    </Routes>
  )
}
