import { expect, describe, it, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ShowSearch from '~/components/pages/home/ShowSearch/index.vue'

describe('ShowList component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(ShowSearch)
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
