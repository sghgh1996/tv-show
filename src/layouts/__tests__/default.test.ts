import { expect, describe, it, beforeEach } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import DefaultLayout from '~/layouts/default.vue'

describe('default layout', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(DefaultLayout)
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
