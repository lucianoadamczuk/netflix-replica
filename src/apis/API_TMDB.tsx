import React, { type ReactNode, createContext, useState, useEffect } from 'react'

interface ContextProps {
  API_BASE: string
  API_KEY: string
  IMAGE_URL: string | undefined
}

export const API_TMDB_CONTEXT = createContext<ContextProps | undefined>(undefined)

interface API_TMDB_PROVIDER_PROPS {
  children: ReactNode
}
export const API_TMDB_PROVIDER: React.FC<API_TMDB_PROVIDER_PROPS> = ({ children }) => {
  const API_BASE = 'https://api.themoviedb.org/3/'
  const API_KEY = 'ce710ce9647f27d3c9514f1d3d3e1331'

  const [IMAGE_URL, SET_IMAGE_URL] = useState<string | undefined>(undefined)

  useEffect(() => {
    function detectWidth (): void {
      if (window.innerWidth < 800) {
        SET_IMAGE_URL('https://image.tmdb.org/t/p/w500/')
      } else {
        SET_IMAGE_URL('https://image.tmdb.org/t/p/original/')
      }
    }
    detectWidth()
    window.addEventListener('resize', detectWidth)
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [])

  return (
    <API_TMDB_CONTEXT.Provider value={{ API_BASE, API_KEY, IMAGE_URL }}>
      { children }
    </API_TMDB_CONTEXT.Provider>
  )
}
