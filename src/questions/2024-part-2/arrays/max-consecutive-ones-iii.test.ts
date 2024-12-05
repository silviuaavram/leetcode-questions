import {longestOnes} from './max-consecutive-ones-iii'

test('finds the longest subarray 1', () => {
  const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
  const k = 2

  expect(longestOnes(nums, k)).toEqual(6)
})

test('finds the longest subarray 2', () => {
  const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
  const k = 3

  expect(longestOnes(nums, k)).toEqual(10)
})

test('finds the longest subarray 3', () => {
  const nums = [0, 0, 0, 0, 0]
  const k = 2

  expect(longestOnes(nums, k)).toEqual(2)
})

test('finds the longest subarray 4', () => {
  const nums = [0, 0, 1, 1, 1, 0, 0]
  const k = 0

  expect(longestOnes(nums, k)).toEqual(3)
})
