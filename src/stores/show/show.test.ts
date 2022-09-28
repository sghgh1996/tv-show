import { createPinia, setActivePinia } from 'pinia'
import { describe, expect, it, beforeEach } from 'vitest'
import { Show } from '~/stores/show/types'
import useShowStore from '~/stores/show'

describe('show store - pinia', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('sets a new value for all shows', () => {
    const data: Show[] = [
      {
        id: 1,
        name: 'sample name',
        image: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
        rating: 8,
        averageRuntime: 10,
        genres: ['sample genre'],
        officialSite: 'sample officialSite',
        summary: 'sample summary',
        premiered: '2019-01-01',
        ended: '2020-01-01'
      }
    ]

    const store = useShowStore()
    store.setAllShows(data)

    expect(store.allShows).toEqual(data)
  })

  it('sets a new value for all shows', () => {
    const data: Show = {
      id: 1,
      name: 'sample name',
      image: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
      rating: 8,
      averageRuntime: 10,
      genres: ['sample genre'],
      officialSite: 'sample officialSite',
      summary: 'sample summary',
      premiered: '2019-01-01',
      ended: '2020-01-01'
    }

    const store = useShowStore()
    store.setShow(data)

    expect(store.show).toEqual(data)
  })
})
