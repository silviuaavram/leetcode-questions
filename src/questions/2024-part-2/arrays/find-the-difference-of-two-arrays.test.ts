import {findDifference} from './find-the-difference-of-two-arrays'

test('finds the difference 1', () => {
  const nums1 = [1, 2, 3]
  const nums2 = [2, 4, 6]

  expect(findDifference(nums1, nums2)).toEqual([
    [1, 3],
    [4, 6],
  ])
})

test('finds the difference 2', () => {
  const nums1 = [1, 2, 3, 3]
  const nums2 = [1, 1, 2, 2]

  expect(findDifference(nums1, nums2)).toEqual([[3], []])
})
