import {isZeroArray} from './zero-array-transformation-i'

test('checks if array is zero array 1', () => {
  const nums = [1, 0, 1]
  const queries = [[0, 2]]

  expect(isZeroArray(nums, queries)).toEqual(true)
})

test('checks if array is zero array 2', () => {
  const nums = [4, 3, 2, 1]
  const queries = [
    [1, 3],
    [0, 2],
  ]

  expect(isZeroArray(nums, queries)).toEqual(false)
})
