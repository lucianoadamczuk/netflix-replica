import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageHome } from '../pages/PageHome/PageHome'
import { routesConfig } from './routesConfig'
import { PageMovies } from '../pages/PageMovies/PageMovies'
import { PageSeries } from '../pages/PageSeries/PageSeries'
import { Page404 } from '../pages/Page404/Page404'
import { PageDetails } from '../pages/PageDetails/PageDetails'
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={routesConfig.home.path} element={ <PageHome/> }/>
      <Route path={routesConfig.movies.path} element={ <PageMovies/> }/>
      <Route path={routesConfig.series.path} element={ <PageSeries/> }/>
      <Route path={routesConfig.details.path} element={ <PageDetails/> }/>
      <Route path='*' element={ <Page404/> } />
    </Routes>
  )
}
