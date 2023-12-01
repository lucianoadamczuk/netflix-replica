import { useState, useContext, useEffect } from 'react'
import { API_TMDB_CONTEXT } from '../apis/API_TMDB'

interface Data {
  name: string
  key: string
}

interface FetchResults {
  serieVideoURL: string | undefined
}

interface functionParam {
  param: string | undefined
}

export const useFetchSerieTrailer = ({ param }: functionParam): FetchResults => {
  const apiContext = useContext(API_TMDB_CONTEXT)
  const [data, setData] = useState<Data[]>()

  const getData = async (): Promise<void> => {
    const { API_BASE, API_KEY } = apiContext
    if (param !== undefined) {
      try {
        const request = await fetch(API_BASE + `tv/${param}/videos` + '?api_key=' + API_KEY)
        if (!request.ok) {
          console.log('Request failed')
        } else {
          const response = await request.json()
          setData(response.results)
        }
      } catch (error) {
        console.log('error fetching trailer', error)
      }
    }
  }
  // The function is executed when it receives the param
  useEffect(() => {
    void getData()
  }, [param])

  // When data changes its value, this useEffect will try to find an element with a title "Original Trailer".
  // If there it not an Original Trailer it will tries to find the title "Final trailer".
  // If "Original Trailer" or "Final Trailer" exists, we will catch it in dataFound and then access to the value .key, which will be part of the URL.
  const [trailerKey, setTrailerKey] = useState<undefined | string>(undefined)
  useEffect(() => {
    if (data?.find(item => item.name === 'Official Trailer') != null) {
      const dataFound = data.find(item => item.name === 'Official Trailer')
      setTrailerKey(dataFound?.key)
    } else if ((data?.find(item => item.name === 'Final Trailer')) != null) {
      const dataFound = data.find(item => item.name === 'Final Trailer')
      setTrailerKey(dataFound?.key)
    }
  }, [data])

  // When trailerKey changes the new videoURL value will be assigned and returned to be displayed with an iFrame.
  const [serieVideoURL, setSerieVideoURL] = useState<undefined | string>(undefined)
  useEffect(() => {
    setSerieVideoURL(`https://www.youtube.com/embed/${trailerKey}`)
  }, [trailerKey])

  return { serieVideoURL }
}
