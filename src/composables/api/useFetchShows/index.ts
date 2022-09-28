import useFetch from '~/composables/useFetch'
import { API_URLS } from '~/composables/useFetch/types'
import useShowStore from '~/stores/show'

const useFetchShows = () => {
  const apiFetch = useFetch()
  const showStore = useShowStore()

  const { data, isFetching, error } = apiFetch(API_URLS.FETCH_SHOWS).json()

  watch(data, (shows) => {
    const allShows = shows.map(dataItem => ({
      id: dataItem.id,
      name: dataItem.name,
      image: dataItem.image?.original,
      rating: dataItem.rating?.average,
      averageRuntime: dataItem.averageRuntime,
      genres: dataItem.genres,
      officialSite: dataItem.officialSite,
      summary: dataItem.summary,
      premiered: dataItem.premiered,
      ended: dataItem.ended
    }))

    showStore.setAllShows(allShows)
  })

  return {
    isFetching,
    error
  }
}

export default useFetchShows
