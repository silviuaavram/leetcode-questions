import {checkSubarraySum} from './continuous-subarray-sum'

test('finds a subarray that sums up to k 1', () => {
  const nums = [23, 2, 4, 6, 7]
  const k = 6

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 2', () => {
  const nums = [23, 2, 6, 4, 7]
  const k = 6

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 3', () => {
  const nums = [23, 2, 6, 4, 7]
  const k = 13

  expect(checkSubarraySum(nums, k)).toEqual(false)
})

test('finds a subarray that sums up to k 4', () => {
  const nums = [23, 2, 6, 4, 7, 0, 0]
  const k = 13

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 5', () => {
  const nums = [1, 3, 5, 5]
  const k = 10

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 6', () => {
  const nums = [1, 3, 5, 7, 0]
  const k = 7

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 6', () => {
  const nums = [1, 3, 0, 5, 7, 0]
  const k = 5

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 7', () => {
  const nums = [1, 3, 0, 5, 7, 0]
  const k = 4

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 8', () => {
  const nums = [1, 3, 0, 5, 7, 0]
  const k = 3

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 9', () => {
  const nums = [13, 3, 0, 5, 7, 0]
  const k = 13

  expect(checkSubarraySum(nums, k)).toEqual(false)
})

test('finds a subarray that sums up to k 10', () => {
  const nums = [23, 2, 4, 6, 6]
  const k = 7

  expect(checkSubarraySum(nums, k)).toEqual(true)
})

test('finds a subarray that sums up to k 11', () => {
  const nums = [11, 2, 3, 4]
  const k = 11

  expect(checkSubarraySum(nums, k)).toEqual(false)
})
