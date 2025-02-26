import {findMaxLength} from './contiguous-array'

test('finds longest subarray with equal number of zeros and ones 1', () => {
  const nums = [0, 1]

  expect(findMaxLength(nums)).toEqual(2)
})

test('finds longest subarray with equal number of zeros and ones 2', () => {
  const nums = [0, 1, 0]

  expect(findMaxLength(nums)).toEqual(2)
})

test('finds longest subarray with equal number of zeros and ones 3', () => {
  const nums = [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0]

  expect(findMaxLength(nums)).toEqual(4)
})

test('finds longest subarray with equal number of zeros and ones 4', () => {
  const nums = [0, 0, 1, 1, 0, 0, 0, 0, 0, 1]

  expect(findMaxLength(nums)).toEqual(4)
})

// [0 0 1 0 0 0 1 1]
// -1 -2 -1 -2 -3 - 4 -3 -2