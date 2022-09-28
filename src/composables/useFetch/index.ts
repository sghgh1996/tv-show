import { createFetch } from '@vueuse/core'

const useFetch = () => {
  return createFetch({
    baseUrl: 'https://api.tvmaze.com/'
  })
}

export default useFetch
