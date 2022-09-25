import { ViteSSGContext } from 'vite-ssg'
import { describe, expect, it } from 'vitest'
import { install, messages } from './index'

describe('i18n module', () => {
  it('is defined', () => {
    expect(install).toBeDefined()
  })

  it('contains an install function', () => {
    expect(typeof install).toBe('function')
  })

  it('contains an object with all the translations', () => {
    expect(typeof messages).toBe('object')
  })

  it('has no effect when calling install with an empty object', () => {
    const result = install({} as ViteSSGContext)
    expect(result).toBeUndefined()
  })
})
