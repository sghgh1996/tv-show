import { expect, describe, it, beforeEach, vi } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ShowDetailPage from '~/pages/shows/[showId].vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    params: {
      showId: '1'
    }
  }))
}))

describe('show detail page', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(ShowDetailPage)
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
