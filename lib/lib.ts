export const sum = (a: number, b: number) => a + b

if (import.meta.vitest) {
  // eslint-disable-next-line functional/prefer-immutable-types
  const { it, expect } = import.meta.vitest

  it('adds two number together', () => {
    expect(sum(1, 2)).toBe(3)
  })
}
