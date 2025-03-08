import {lengthOfLIS} from './longest-increasing-subsequence'

test('checks the longest increasing subsequence 1', () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18]

  expect(lengthOfLIS(nums)).toEqual(4)
})

test('checks the longest increasing subsequence 2', () => {
  const nums = [0, 1, 0, 3, 2, 3]

  expect(lengthOfLIS(nums)).toEqual(4)
})

test('checks the longest increasing subsequence 3', () => {
  const nums = [7, 7, 7, 7, 7, 7, 7]

  expect(lengthOfLIS(nums)).toEqual(1)
})
