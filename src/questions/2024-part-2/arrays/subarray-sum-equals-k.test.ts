import {subarraySum} from './subarray-sum-equals-k'

test('returns the subarrays 1', () => {
  const nums = [1, 1, 1]
  const k = 2

  expect(subarraySum(nums, k)).toEqual(2)
})

test('returns the subarrays 2', () => {
  const nums = [1, 2, 3]
  const k = 3

  expect(subarraySum(nums, k)).toEqual(2)
})

test('returns the subarrays 3', () => {
  const nums = [1, -2, 3, -4, 5]
  const k = 1

  expect(subarraySum(nums, k)).toEqual(3)
})
