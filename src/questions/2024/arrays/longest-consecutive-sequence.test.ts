import {longestConsecutive} from './longest-consecutive-sequence'

test('finds the longest consecutive sequence 1', () => {
  const nums = [100, 4, 200, 1, 3, 2]

  expect(longestConsecutive(nums)).toEqual(4)
})

test('finds the longest consecutive sequence 2', () => {
  const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

  expect(longestConsecutive(nums)).toEqual(9)
})

test('finds the longest consecutive sequence 3', () => {
  const nums = [11, 12, 14, 5, 6, 1, 4, 5, 3, 13, 2]

  expect(longestConsecutive(nums)).toEqual(6)
})

test('finds the longest consecutive sequence 4', () => {
  const nums = []

  expect(longestConsecutive(nums)).toEqual(0)
})
