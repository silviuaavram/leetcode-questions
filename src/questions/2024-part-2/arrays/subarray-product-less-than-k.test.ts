import {numSubarrayProductLessThanK} from './subarray-product-less-than-k'

test('checks subarrays products 1', () => {
  const nums = [10, 5, 2, 6]
  const k = 100

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(8)
})

test('checks subarrays products 2', () => {
  const nums = [1, 2, 3]
  const k = 0

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(0)
})

test('checks subarrays products 3', () => {
  const nums = [57, 44, 92, 28, 66, 60, 37, 33, 52, 38, 29, 76, 8, 75, 22]
  const k = 18

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(1)
})

test('checks subarrays products 4', () => {
    const nums = [3, 2, 3, 2, 1, 3]
    const k = 2
  
    expect(numSubarrayProductLessThanK(nums, k)).toEqual(1)
  })
