import {findMaxAverage} from './maximum-average-subarray-i'

test('finds max average 1', () => {
  const nums = [1, 12, -5, -6, 50, 3]
  const k = 4

  expect(findMaxAverage(nums, k)).toEqual(12.75)
})

test('finds max average 2', () => {
  const nums = [5]
  const k = 1

  expect(findMaxAverage(nums, k)).toEqual(5)
})
