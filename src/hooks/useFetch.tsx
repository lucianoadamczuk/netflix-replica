import { useState, useContext, useEffect } from 'react'
import { API_TMDB_CONTEXT } from '../apis/API_TMDB'
import { type InterfaceMedia } from '../interfaces'

interface FetchResults {
  data: InterfaceMedia[]
}

interface functionParams {
  param: string
}

export const useFetch = ({ param }: functionParams): FetchResults => {
  const apiContext = useContext(API_TMDB_CONTEXT)
  const [data, setData] = useState<InterfaceMedia[]>([])

  const getData = async (): Promise<void> => {
    const { API_BASE, API_KEY } = apiContext
    try {
      const request = await fetch(API_BASE + param + '?api_key=' + API_KEY)
      if (!request.ok) {
        console.log('Request failed')
      } else {
        const response = await request.json()
        setData(response.results)
      }
    } catch (error) {
      console.log('error fetching', error)
    }
  }

  useEffect(() => {
    void getData()
  }, [apiContext, param])

  return { data }
}
