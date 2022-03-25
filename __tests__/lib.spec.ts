import { sum } from '../lib'

describe('lib', () => {
  it('adds two number together', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
