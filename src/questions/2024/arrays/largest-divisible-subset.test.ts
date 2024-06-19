import {largestDivisibleSubset} from './largest-divisible-subset'

test('returns the largest divisible subset 1', () => {
  const nums = [1, 2, 3]

  expect(largestDivisibleSubset(nums)).toEqual([1, 2])
})

test('returns the largest divisible subset 2', () => {
  const nums = [1, 2, 4, 8]

  expect(largestDivisibleSubset(nums)).toEqual([1, 2, 4, 8])
})
