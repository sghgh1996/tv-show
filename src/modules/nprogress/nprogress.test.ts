import { ViteSSGContext } from 'vite-ssg'
import { describe, expect, it } from 'vitest'
import { install } from './index'

describe('nprogress module', () => {
  it('is defined', () => {
    expect(install).toBeDefined()
  })

  it('contains an install function', () => {
    expect(typeof install).toBe('function')
  })

  it('has no effect when calling install with an empty object', () => {
    const result = install({} as ViteSSGContext)
    expect(result).toBeUndefined()
  })
})
