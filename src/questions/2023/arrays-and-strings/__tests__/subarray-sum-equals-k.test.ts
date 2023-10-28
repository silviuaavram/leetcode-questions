import {subarraySum} from '../subarray-sum-equals-k'

test('returns subarrays 1', () => {
  const nums = [1, 1, 1]
  const k = 2

  expect(subarraySum(nums, k)).toEqual(2)
})

test('returns subarrays 2', () => {
  const nums = [1, 2, 3]
  const k = 3

  expect(subarraySum(nums, k)).toEqual(2)
})

test('returns subarrays 3', () => {
  const nums = [3]
  const k = 3

  expect(subarraySum(nums, k)).toEqual(1)
})

test('returns subarrays 4', () => {
  const nums = [3, 2, 6, 1, 5, 1, 4]
  const k = 5

  expect(subarraySum(nums, k)).toEqual(3)
})

test('returns subarrays 5', () => {
  const nums = [3, 2, 6, 1, 5, 1, 4]
  const k = 9

  expect(subarraySum(nums, k)).toEqual(1)
})

test('returns subarrays 6', () => {
  const nums = [1, 2, 1, 2, 1]
  const k = 3

  expect(subarraySum(nums, k)).toEqual(4)
})

test('returns subarrays 7', () => {
  const nums = [-1, -1, 1]
  const k = 0

  expect(subarraySum(nums, k)).toEqual(1)
})

test('returns subarrays 8', () => {
  const nums = [1, 1, 1, 2]
  const k = 1

  expect(subarraySum(nums, k)).toEqual(3)
})
