import { expect, describe, it, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ShowList from '~/components/pages/home/ShowList/index.vue'
import ShowTile from '~/components/pages/home/ShowTile/index.vue'

describe('ShowList component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(ShowList, {
      props: {
        shows: [{
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
        }],
        title: 'sample title'
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the title and ShowTile', () => {
    expect(wrapper.find('[data-test="content-title"]').text()).toBe('sample title')
    const showTileCmp = wrapper.findComponent(ShowTile)
    expect(showTileCmp).toBeDefined()
  })
})
