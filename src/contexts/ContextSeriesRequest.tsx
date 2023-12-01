import React, { type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { API_TMDB_CONTEXT } from '../apis/API_TMDB'
import { type InterfaceMedia } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

interface DataSeriesProps {
  id: string
  title: string
  data: InterfaceMedia[]
}

interface ContextProps {
  dataSeries: DataSeriesProps[]
}

export const ContextSeriesRequest = createContext<ContextProps>({ dataSeries: [] })

interface ProviderProps {
  children: ReactNode
}

export const ProviderSeriesRequest: React.FC<ProviderProps> = ({ children }) => {
  const { API_BASE, API_KEY } = useContext(API_TMDB_CONTEXT)

  // Every Object will have an ID, a title and the data to be displayed
  const [dataSeries, setDataSeries] = useState<DataSeriesProps[]>([])

  // These genres are provided by TMDB fetching API_BASE + genre/movie/list + API_KEY= + API_KEY
  const genres = [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' }
  ]

  async function getSeries (param: { name: string, id: number }): Promise<void> {
    try {
      const request = await fetch(API_BASE + 'discover/tv?api_key=' + API_KEY + `&with_genres=${param.id}`)
      if (!request.ok) {
        console.log('Request serie error')
      } else {
        const response = await request.json()
        setDataSeries((prevState) => [...prevState, { id: uuidv4(), title: param.name, data: response.results }])
      }
    } catch (error) {
      console.log('Error getting series with genre: ', param.name, error)
    }
  }

  useEffect(() => {
    if (dataSeries.length === 0) {
      genres.forEach(genre => {
        void getSeries(genre)
      })
    }
  }, [])

  return (
    <ContextSeriesRequest.Provider value={{ dataSeries }}>
      {children}
    </ContextSeriesRequest.Provider>
  )
}
