import { expect, describe, it, beforeEach } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Home from '~/pages/index.vue'

describe('home page', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(Home)
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
