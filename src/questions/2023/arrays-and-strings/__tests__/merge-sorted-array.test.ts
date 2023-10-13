import {merge} from '../merge-sorted-array'

test('arrays to be merged 1', () => {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const m = 3
  const nums2 = [2, 5, 6]
  const n = 3

  merge(nums1, m, nums2, n)

  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})
test('arrays to be merged 2', () => {
  const nums1 = [1]
  const m = 0
  const nums2 = []
  const n = 1

  merge(nums1, m, nums2, n)

  expect(nums1).toEqual([1])
})
test('arrays to be merged 3', () => {
  const nums1 = [0]
  const m = 0
  const nums2 = [1]
  const n = 1

  merge(nums1, m, nums2, n)

  expect(nums1).toEqual([1])
})

test('arrays to be merged 4', () => {
  const nums1 = [1, 2, 3, 5, 7, 9, 0, 0, 0]
  const m = 6
  const nums2 = [2, 4, 6]
  const n = 3

  merge(nums1, m, nums2, n)

  expect(nums1).toEqual([1, 2, 2, 3, 4, 5, 6, 7, 9])
})

test.only('arrays to be merged 5', () => {
  const nums1 = [1, 2, 4, 5, 6, 0]
  const m = 5
  const nums2 = [3]
  const n = 1

  merge(nums1, m, nums2, n)

  expect(nums1).toEqual([1, 2, 3, 4, 5, 6])
})
