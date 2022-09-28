export type Show = {
  name: string
  image: string
  rating: string
  url: string
  averageRuntime: number
  genres: string[]
  officialSite: string
  summary: string
  premiered: string
  ended: string
}

type State = {
  allShows?: Show[],
  showId?: number,
  show?: Show
}

export default State
