import { expect, describe, it, beforeEach, vi } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import Home from '~/pages/index.vue'
import { createPinia, setActivePinia } from 'pinia'

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
