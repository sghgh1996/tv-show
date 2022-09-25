import { expect, describe, it, beforeEach, vi } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import Home from '~/pages/index.vue'
import { createI18n } from 'vue-i18n'
import { messages } from '~/modules/i18n/index'

describe('home page', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      messages
    })

    wrapper = shallowMount(Home, {
      global: {
        plugins: [i18n]
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
