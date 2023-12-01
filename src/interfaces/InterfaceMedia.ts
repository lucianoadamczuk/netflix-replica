export interface InterfaceMedia {
  id: number
  title?: string
  name?: string
  tagline: string
  overview: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  release_date: string
  runtime: number
  episode_run_time: number
  genres: Array<{ id: number, name: string }>
  spoken_languages: Array<{ english_name: string }>
  production_companies: Array<{ id: number, name: string }>
}
