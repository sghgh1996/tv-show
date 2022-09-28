import useFetch from '~/composables/useFetch'
import { API_URLS } from '~/composables/useFetch/types'
import useShowStore from '~/stores/show'

const useFetchOneShow = (showId: number) => {
  const showStore = useShowStore()

  if (showStore.show?.id === showId) {
    return {
      isFetching: false,
      error: null
    }
  }
  const apiFetch = useFetch()

  const { data, isFetching, error } = apiFetch(`${API_URLS.FETCH_SHOWS}/${showId}`).json()

  watch(data, (show) => {
    const selectedShow = {
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

    showStore.setShow(selectedShow)
  })

  return {
    isFetching,
    error
  }
}

export default useFetchOneShow
