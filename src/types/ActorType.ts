export type ActorType = {
  id: number
  name: string
  slug: string
  picture: string
  biography: string
  birth_date: string
  birth_place: string
  created_at: string
  updated_at: string
  pivot?: {
    movie_id: number
    actor_id: number
    order: number
  }
}
