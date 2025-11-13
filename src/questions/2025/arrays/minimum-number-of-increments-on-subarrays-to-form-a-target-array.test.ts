import {minNumberOperations} from './minimum-number-of-increments-on-subarrays-to-form-a-target-array'

test('operations to form target from initial array 1', () => {
  const target = [1, 2, 3, 2, 1]

  expect(minNumberOperations(target)).toEqual(3)
})

test('operations to form target from initial array 2', () => {
  const target = [3, 1, 1, 2]

  expect(minNumberOperations(target)).toEqual(4)
})

test('operations to form target from initial array 3', () => {
  const target = [3, 1, 5, 4, 2]

  expect(minNumberOperations(target)).toEqual(7)
})

test('operations to form target from initial array 4', () => {
  const target = [1, 2, 3, 4, 7]

  expect(minNumberOperations(target)).toEqual(7)
})

test('operations to form target from initial array 5', () => {
  const target = [5, 4, 2, 1]

  expect(minNumberOperations(target)).toEqual(5)
})

test('operations to form target from initial array 6', () => {
  const target = [1]

  expect(minNumberOperations(target)).toEqual(1)
})

test('operations to form target from initial array 7', () => {
  const target = [3, 4, 2, 5, 6]

  expect(minNumberOperations(target)).toEqual(8)
})
