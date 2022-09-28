import { expect, it, describe, beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import App from '~/App/index.vue'
import { createHead } from '@vueuse/head'

describe('App.vue', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    const head = createHead()

    wrapper = shallowMount(App, {
      global: {
        plugins: [head]
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
