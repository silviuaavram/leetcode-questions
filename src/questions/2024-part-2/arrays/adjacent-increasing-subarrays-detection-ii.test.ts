import {maxIncreasingSubarrays} from './adjacent-increasing-subarrays-detection-ii'

test('returns the max adjacent increasing subarrays 1', () => {
  const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1]

  expect(maxIncreasingSubarrays(nums)).toEqual(3)
})

test('returns the max adjacent increasing subarrays 2', () => {
  const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7]

  expect(maxIncreasingSubarrays(nums)).toEqual(2)
})

test('returns the max adjacent increasing subarrays 3', () => {
  const nums = [5, 4, 3, 2, 1]

  expect(maxIncreasingSubarrays(nums)).toEqual(1)
})

test('returns the max adjacent increasing subarrays 4', () => {
  const nums = [5, 4, 3, 2, 1, 2, 1]

  expect(maxIncreasingSubarrays(nums)).toEqual(1)
})

test('returns the max adjacent increasing subarrays 5', () => {
  const nums = [0, 1, 0, 1, 0]

  expect(maxIncreasingSubarrays(nums)).toEqual(2)
})

test('returns the max adjacent increasing subarrays 6', () => {
  const nums = [19, 5]

  expect(maxIncreasingSubarrays(nums)).toEqual(1)
})
