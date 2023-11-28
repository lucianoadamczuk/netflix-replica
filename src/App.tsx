import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Routes'
import { API_TMDB_PROVIDER } from './apis/API_TMDB'

function App() {
  return (
    <>
      <API_TMDB_PROVIDER>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </API_TMDB_PROVIDER>
    </>
  )
}

export default App
