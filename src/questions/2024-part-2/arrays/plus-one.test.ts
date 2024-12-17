import {plusOne} from './plus-one'

test('increments number 1', () => {
  const digits = [1, 2, 3]

  expect(plusOne(digits)).toEqual([1, 2, 4])
})

test('increments number 2', () => {
  const digits = [4, 3, 2, 1]

  expect(plusOne(digits)).toEqual([4, 3, 2, 2])
})

test('increments number 3', () => {
  const digits = [9]

  expect(plusOne(digits)).toEqual([1, 0])
})

test('increments number 4', () => {
  expect(plusOne([])).toEqual([1])
})
