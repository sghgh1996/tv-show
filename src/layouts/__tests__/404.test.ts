import { expect, describe, it, beforeEach } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import NotFound from '../404.vue'
import { createI18n } from 'vue-i18n'
import { messages } from '~/modules/i18n/index'

describe('404 layout', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      messages
    })

    wrapper = shallowMount(NotFound, {
      global: {
        plugins: [i18n]
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
