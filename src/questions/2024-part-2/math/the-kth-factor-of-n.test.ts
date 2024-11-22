import {kthFactor} from './the-kth-factor-of-n'

test('return the kth factor 1', () => {
  const n = 12
  const k = 3

  expect(kthFactor(n, k)).toEqual(3)
})

test('return the kth factor 2', () => {
  const n = 7
  const k = 2

  expect(kthFactor(n, k)).toEqual(7)
})

test('return the kth factor 3', () => {
  const n = 4
  const k = 4

  expect(kthFactor(n, k)).toEqual(-1)
})
