import {mergeArrays} from './merge-two-2d-arrays-by-summing-values'

test('merges arrays 1', () => {
  const nums1 = [
    [1, 2],
    [2, 3],
    [4, 5],
  ]
  const nums2 = [
    [1, 4],
    [3, 2],
    [4, 1],
  ]

  expect(mergeArrays(nums1, nums2)).toEqual([
    [1, 6],
    [2, 3],
    [3, 2],
    [4, 6],
  ])
})

test('merges arrays 2', () => {
  const nums1 = [
    [2, 4],
    [3, 6],
    [5, 5],
  ]
  const nums2 = [
    [1, 3],
    [4, 3],
  ]

  expect(mergeArrays(nums1, nums2)).toEqual([
    [1, 3],
    [2, 4],
    [3, 6],
    [4, 3],
    [5, 5],
  ])
})
