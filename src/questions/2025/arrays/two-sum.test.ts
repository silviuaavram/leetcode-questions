import {twoSum} from './two-sum'

test('returns indices of 2 numbers that make up the target sum 1', () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  expect(twoSum(nums, target)).toEqual([0, 1])
})

test('returns indices of 2 numbers that make up the target sum 2', () => {
  const nums = [3, 2, 4]
  const target = 6

  expect(twoSum(nums, target)).toEqual([1, 2])
})

test('returns indices of 2 numbers that make up the target sum 3', () => {
  const nums = [3, 3]
  const target = 6

  expect(twoSum(nums, target)).toEqual([0, 1])
})

test('returns indices of 2 numbers that make up the target sum 4', () => {
  const nums = [2, 7, 11, 15, 5, 6]
  const target = 7

  expect(twoSum(nums, target)).toEqual([0, 4])
})

test('returns indices of 2 numbers that make up the target sum 5', () => {
  const nums = [2, 7, 11, 11, 5, 6]
  const target = 22

  expect(twoSum(nums, target)).toEqual([2, 3])
})

test('throw error if target is not found', () => {
  const nums = [2, 7, 11, 11, 5, 6]
  const target = 10

  expect(() => twoSum(nums, target)).toThrowErrorMatchingInlineSnapshot(`"should have at least one solution"`)
})


