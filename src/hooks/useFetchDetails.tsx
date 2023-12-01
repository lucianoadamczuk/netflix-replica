import { useContext, useEffect, useState } from 'react'
import { API_TMDB_CONTEXT } from '../apis/API_TMDB'
import { type InterfaceMedia } from '../interfaces'

interface FetchProps {
  data: InterfaceMedia | undefined
}

interface FunctionParams {
  param: string
}

export const useFetchDetails = ({ param }: FunctionParams): FetchProps => {
  const { API_BASE, API_KEY } = useContext(API_TMDB_CONTEXT)
  const [data, setData] = useState<InterfaceMedia | undefined>(undefined)

  async function getData (): Promise<void> {
    try {
      const request = await fetch(API_BASE + param + '?api_key=' + API_KEY)
      if (!request.ok) {
        console.log('Error request')
      } else {
        const response = await request.json()
        setData(response)
      }
    } catch (error) {
      console.log('Error geting details', error)
    }
  }

  useEffect(() => {
    void getData()
  }, [param])

  return { data }
}
