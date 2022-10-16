import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { ActorType } from 'types/ActorType'

interface IContextProps {
  actors: ActorType[]
  isLoading: boolean
  totalPages: number
  currentPage: number
  error: string | null
  // fetchCharacters: (page: number, search?: string) => Promise<void>
  fetchActors: () => Promise<void>
  fetchActor: (slug: string) => Promise<void>
  actor: ActorType | null
}
interface IActorsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const ActorsProvider: React.FC<IActorsProviderProps> = ({
  children,
}) => {
  const [actors, setActors] = useState<ActorType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [actor, setActor] = useState<ActorType | null>(null)
  const [error, setError] = useState<string | null>(null)
  // const fetchMovies = useCallback(async (page: number, search?: string) => {
  const fetchActors = useCallback(async () => {
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
      const { data } = await Api.get('/actors')
      setActors(data.data)
    } catch {
      setError('Não foi possível carregar os filmes')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchActors()
  }, [fetchActors])

  const fetchActor = useCallback(async (slug: string) => {
    setIsLoading(true)
    setError(null)
    try {
      // setIsLoading(true);
      // const { data } = await Api.get(`/movies/${slug}`)
      const { data } = await Api.get(`/actors`)
      setActor(data.data[0])
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
          actors,
          isLoading,
          totalPages,
          currentPage,
          fetchActors,
          fetchActor,
          actor,
          error,
        }),
        [
          actors,
          isLoading,
          totalPages,
          currentPage,
          fetchActors,
          fetchActor,
          actor,
          error,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useActors = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
