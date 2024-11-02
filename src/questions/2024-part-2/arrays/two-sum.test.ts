import {twoSum} from './two-sum'

test('returns the indices of 2 numbers that add up to target 1', () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  expect(twoSum(nums, target)).toEqual([0, 1])
})

test('returns the indices of 2 numbers that add up to target 2', () => {
  const nums = [3, 2, 4]
  const target = 6

  expect(twoSum(nums, target)).toEqual([1, 2])
})

test('returns the indices of 2 numbers that add up to target 3', () => {
  const nums = [3, 3]
  const target = 6

  expect(twoSum(nums, target)).toEqual([0, 1])
})

test('returns the indices of 2 numbers that add up to target 4', () => {
  const nums = [1, 23, 3, 2, 6, 3]
  const target = 6

  expect(twoSum(nums, target)).toEqual([2, 5])
})
