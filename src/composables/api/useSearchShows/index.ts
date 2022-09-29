import useFetch from '~/composables/useFetch'
import { API_URLS } from '~/composables/useFetch/types'
import useShowStore from '~/stores/show'

const useSearchShows = (searchText: string) => {
  const apiFetch = useFetch()
  const showStore = useShowStore()

  const { data, isFetching, error } = apiFetch(`${API_URLS.SEARCH_SHOWS}${searchText}`).json()

  watch(data, (shows) => {
    const allShows = shows.map((dataItem) => {
      const show = dataItem.show
      return {
        id: show.id,
        name: show.name,
        image: show.image?.original,
        rating: show.rating?.average,
        averageRuntime: show.averageRuntime,
        genres: show.genres,
        officialSite: show.officialSite,
        summary: show.summary,
        premiered: show.premiered,
        ended: show.ended
      }
    })

    showStore.setSearchedShows(allShows)
  })

  return {
    isFetching,
    error
  }
}

export default useSearchShows
