import { ActorType } from './ActorType'
import { CategoryType } from './CategoryType'

export type MovieType = {
  id: number
  slug: string
  title: string
  description: string
  director: string
  year: number
  duration: string
  score: string
  cover: string
  trailer: string
  created_at: string
  updated_at: string
  categories: CategoryType[]
  actors: ActorType[]
}
