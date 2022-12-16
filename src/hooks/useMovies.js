import { useFetch } from './useFetch'

const tmdb_api_key = process.env.REACT_APP_API_KEY_TMDB

export const useMovies = () => {
  const { isLoading, data, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${tmdb_api_key}&language=fr-FR&page=1`
  )
  return { isLoading, data, error }
}
