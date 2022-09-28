import { defineStore } from 'pinia'
import { StoreKeys } from '~/stores/types'
import State, { Show } from './types'

interface Actions {
  setAllShows: (data: Show[]) => void
  setShow: (data: Show) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useShowStore = defineStore<StoreKeys, State, any, Actions>(StoreKeys.SHOW, {
  state: () => ({
    allShows: [],
    show: undefined
  }),

  actions: {
    setAllShows(data: Show[]) {
      this.allShows = data
    },
    setShow(data: Show) {
      this.show = data
    }
  }
})

export default useShowStore

