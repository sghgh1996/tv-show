export type Show = {
  id: number
  name: string
  image: string
  rating: string
  averageRuntime: number
  genres: string[]
  officialSite: string
  summary: string
  premiered: string
  ended: string
}

type State = {
  allShows?: Show[],
  show?: Show
}

export default State
