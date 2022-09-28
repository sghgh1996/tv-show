import useFetch from '~/middleware/utils/useFetch'
import { API_URLS } from '~/middleware/utils/useFetch/types'
import useShowStore from '~/stores/show'

const useFetchShows = () => {
  const apiFetch = useFetch()
  const store = useShowStore()

  const { data, isFetching, error } = apiFetch(API_URLS.FETCH_SHOWS).json()

  watch(data, (shows) => {
    const allShows = shows.map(dataItem => ({
      name: dataItem.name,
      image: dataItem.image?.original,
      rating: dataItem.rating?.average,
      url: dataItem.url,
      averageRuntime: dataItem.averageRuntime,
      genres: dataItem.genres,
      officialSite: dataItem.officialSite,
      summary: dataItem.summary,
      premiered: dataItem.premiered,
      ended: dataItem.ended
    }))

    store.setAllShows(allShows)
  })

  return {
    isFetching,
    error
  }
}

export default useFetchShows
