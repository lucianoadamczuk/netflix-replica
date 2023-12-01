import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Routes'
import { API_TMDB_PROVIDER } from './apis/API_TMDB'
import { Navbar } from './layout/Navbar/Navbar'
import { Loader } from './components/ui/Loader/Loader'
import { MovieTrailerModal } from './widgets/MovieTrailerModal/MovieTrailerModal'
import { SerieTrailerModal } from './widgets/SerieTrailerModal/SerieTrailerModal'
import { AllContexts } from './contexts/AllContexts'

const App: React.FC = () => {
  return (
    <>
      <API_TMDB_PROVIDER>
        <AllContexts>
          <Suspense fallback={ <Loader/> } >
            <BrowserRouter>
              <Navbar/>
              <AppRoutes/>
              <MovieTrailerModal/>
              <SerieTrailerModal/>
            </BrowserRouter>
          </Suspense>
        </AllContexts>
      </API_TMDB_PROVIDER>
    </>
  )
}

export default App
