import React, { type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { API_TMDB_CONTEXT } from '../apis/API_TMDB'
import { type InterfaceMedia } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

interface DataMoviesProps {
  id: string
  title: string
  data: InterfaceMedia[]
}

interface ContextProps {
  dataMovies: DataMoviesProps[]
}

export const ContextMoviesRequest = createContext<ContextProps>({ dataMovies: [] })

interface ProviderProps {
  children: ReactNode
}

export const ProviderMoviesRequest: React.FC<ProviderProps> = ({ children }) => {
  const { API_BASE, API_KEY } = useContext(API_TMDB_CONTEXT)

  // Every Object will have an ID, a title and the data to be displayed
  const [dataMovies, setDataMovies] = useState<DataMoviesProps[]>([])

  // These genres are provided by TMDB fetching API_BASE + genre/movie/list + API_KEY= + API_KEY
  const genres = [
    { name: 'Action', id: 28 },
    { name: 'Adventure', id: 12 },
    { name: 'Animation', id: 16 },
    { name: 'Comedy', id: 35 },
    { name: 'Crime', id: 80 },
    { name: 'Documentary', id: 99 },
    { name: 'Drama', id: 18 },
    { name: 'Family', id: 10751 },
    { name: 'Fantasy', id: 14 },
    { name: 'History', id: 36 },
    { name: 'Horror', id: 27 },
    { name: 'Music', id: 10402 },
    { name: 'Mystery', id: 9648 },
    { name: 'Romance', id: 10749 },
    { name: 'Science Fiction', id: 878 },
    { name: 'TV Movie', id: 10770 },
    { name: 'Thriller', id: 53 },
    { name: 'War', id: 10752 },
    { name: 'Western', id: 37 }
  ]

  async function getMovies (param: { name: string, id: number }): Promise<void> {
    try {
      const request = await fetch(API_BASE + 'discover/movie?api_key=' + API_KEY + `&with_genres=${param.id}`)
      if (!request.ok) {
        console.log('Request movie error')
      } else {
        const response = await request.json()
        setDataMovies((prevState) => [...prevState, { id: uuidv4(), title: param.name, data: response.results }])
      }
    } catch (error) {
      console.log('Error getting movies with genre: ', param.name, error)
    }
  }

  useEffect(() => {
    if (dataMovies.length === 0) {
      genres.forEach(genre => {
        void getMovies(genre)
      })
    }
  }, [])

  return (
    <ContextMoviesRequest.Provider value={{ dataMovies }}>
      {children}
    </ContextMoviesRequest.Provider>
  )
}
