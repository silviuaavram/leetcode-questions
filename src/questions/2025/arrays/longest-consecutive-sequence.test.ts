import {longestConsecutive} from './longest-consecutive-sequence'

test('gets the longest consecutive sequence 1', () => {
  const nums = [100, 4, 200, 1, 3, 2]

  expect(longestConsecutive(nums)).toEqual(4)
})

test('gets the longest consecutive sequence 2', () => {
  const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

  expect(longestConsecutive(nums)).toEqual(9)
})

test('gets the longest consecutive sequence 3', () => {
  const nums = [1, 0, 1, 2]

  expect(longestConsecutive(nums)).toEqual(3)
})
