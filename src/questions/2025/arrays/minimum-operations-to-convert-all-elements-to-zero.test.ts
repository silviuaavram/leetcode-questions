import {minOperations} from './minimum-operations-to-convert-all-elements-to-zero'

test('min operations to make array of zeros 1', () => {
  const nums = [0, 2]

  expect(minOperations(nums)).toEqual(1)
})

test('min operations to make array of zeros 2', () => {
  const nums = [3, 1, 2, 1]

  expect(minOperations(nums)).toEqual(3)
})

test('min operations to make array of zeros 3', () => {
  const nums = [1, 2, 1, 2, 1, 2]

  expect(minOperations(nums)).toEqual(4)
})

test('min operations to make array of zeros 4', () => {
  const nums = [7, 2, 0, 4, 2]

  expect(minOperations(nums)).toEqual(4)
})
