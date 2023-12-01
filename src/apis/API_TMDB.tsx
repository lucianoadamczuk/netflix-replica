import React, { createContext } from 'react'

interface ContextProps {
  API_BASE: string
  API_KEY: string
  IMAGE_URL: string
  IMAGE_URL_HD: string
}

export const API_TMDB_CONTEXT = createContext<ContextProps>({
  API_BASE: '',
  API_KEY: '',
  IMAGE_URL: '',
  IMAGE_URL_HD: ''
})

interface ProviderProps {
  children: JSX.Element
}

export const API_TMDB_PROVIDER: React.FC<ProviderProps> = ({ children }) => {
  const API_BASE = 'https://api.themoviedb.org/3/'
  const API_KEY = 'ce710ce9647f27d3c9514f1d3d3e1331'

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
  const IMAGE_URL_HD = 'https://image.tmdb.org/t/p/original'

  return (
    <API_TMDB_CONTEXT.Provider value={{ API_BASE, API_KEY, IMAGE_URL, IMAGE_URL_HD }}>
      { children }
    </API_TMDB_CONTEXT.Provider>
  )
}
