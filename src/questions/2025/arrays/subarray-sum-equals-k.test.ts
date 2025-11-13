import {subarraySum} from './subarray-sum-equals-k'

test('counts subarrays that equal k 1', () => {
  const nums = [1, 1, 1]
  const k = 2

  expect(subarraySum(nums, k)).toEqual(2)
})

test('counts subarrays that equal k 2', () => {
  const nums = [1, 2, 3]
  const k = 3

  expect(subarraySum(nums, k)).toEqual(2)
})

test('counts subarrays that equal k 3', () => {
  const nums = [2, 1, 2, -2, 5, -2, 3, 2]
  const k = 5

  expect(subarraySum(nums, k)).toEqual(4)
})

test('counts subarrays that equal k 4', () => {
  const nums = [2, -1, 1]
  const k = 2

  expect(subarraySum(nums, k)).toEqual(2)
})

test('counts subarrays that equal k 5', () => {
  const nums = [1, -1, 0]
  const k = 0

  expect(subarraySum(nums, k)).toEqual(3)
})
