import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { MovieType } from 'types/MovieType'

interface IContextProps {
  movies: MovieType[]
  isLoading: boolean
  totalPages: number
  currentPage: number
  error: string | null
  // fetchCharacters: (page: number, search?: string) => Promise<void>
  fetchMovies: () => Promise<void>
  fetchMovie: (slug: string) => Promise<void>
  movie: MovieType | null
}
interface IMoviesProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const MoviesProvider: React.FC<IMoviesProviderProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<MovieType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [movie, setMovie] = useState<MovieType | null>(null)
  const [error, setError] = useState<string | null>(null)
  // const fetchMovies = useCallback(async (page: number, search?: string) => {
  const fetchMovies = useCallback(async () => {
    setIsLoading(true)
    // const limit = 36
    // const offset = (page - 1) * limits
    // setCurrentPage(page)
    setError(null)

    // const params = {
    // offset,
    // limit,
    // nameStartsWith: search?.length ? search : undefined,
    // }
    // setTotalPages(Math.ceil(total / limit))

    try {
      const { data } = await Api.get('/movies')
      setMovies(data.data)
    } catch {
      setError('Não foi possível carregar os filmes')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const fetchMovie = useCallback(async (slug: string) => {
    setIsLoading(true)
    setError(null)
    try {
      // setIsLoading(true);
      // const { data } = await Api.get(`/movies/${slug}`)
      const { data } = await Api.get(`/movies`)
      setMovie(data.data[0])
    } catch {
      setError('Não foi possível carregar o filme')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          movies,
          isLoading,
          totalPages,
          currentPage,
          fetchMovies,
          fetchMovie,
          movie,
          error,
        }),
        [
          movies,
          isLoading,
          totalPages,
          currentPage,
          fetchMovies,
          fetchMovie,
          movie,
          error,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useMovies = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
