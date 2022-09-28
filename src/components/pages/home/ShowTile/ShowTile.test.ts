import { expect, describe, it, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ShowTile from '~/components/pages/home/ShowTile/index.vue'

describe('ShowList component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(ShowTile, {
      props: {
        show: {
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
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the name, rating and image', () => {
    expect(wrapper.find('[data-test="content-name"]').text()).toBe('sample name')
    expect(wrapper.find('[data-test="content-rating"]').text()).toBe('8 of 10')
    expect(wrapper.find('img').exists()).toBe(true)
  })
})
