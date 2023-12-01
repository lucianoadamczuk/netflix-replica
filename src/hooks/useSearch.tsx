import { useContext, useEffect, useState } from 'react'
import { API_TMDB_CONTEXT } from '../apis/API_TMDB'
import { type InterfaceMedia } from '../interfaces'

interface UseSearchProps {
  data: DataProps
}

interface ParamsProps {
  param: string
  query: string | undefined
  page: number
}

interface DataProps {
  results: InterfaceMedia[]
  total_pages: number
  total_results: number
}

export const useSearch = ({ param, query, page }: ParamsProps): UseSearchProps => {
  const { API_BASE, API_KEY } = useContext(API_TMDB_CONTEXT)
  const [data, setData] = useState<DataProps>({ results: [], total_pages: 0, total_results: 0 })

  async function getData (): Promise<void> {
    try {
      const request = await fetch(API_BASE + param + '?api_key=' + API_KEY + '&query=' + query + '&page=' + page)
      if (!request.ok) {
        console.log('Error request search')
      } else {
        const response = await request.json()
        if (data.results.length === 0) {
          setData(response)
        } else {
          setData((prevState) => ({
            results: [...prevState.results, ...response.results],
            total_pages: response.total_pages,
            total_results: response.total_results
          }))
        }
      }
    } catch (error) {
      console.log('Error searching', error)
    }
  }
  useEffect(() => {
    void getData()
  }, [query, page])

  return { data }
}
