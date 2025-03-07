import {longestCommonPrefix} from './find-the-length-of-the-longest-common-prefix'

test('LCP of 2 groups of numbers 1', () => {
  const arr1 = [1, 10, 100]
  const arr2 = [1000]

  expect(longestCommonPrefix(arr1, arr2)).toEqual(3)
})

test('LCP of 2 groups of numbers 2', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [4, 4, 4]

  expect(longestCommonPrefix(arr1, arr2)).toEqual(0)
})
