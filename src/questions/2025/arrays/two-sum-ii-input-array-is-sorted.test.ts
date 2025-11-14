import {twoSum} from './two-sum-ii-input-array-is-sorted'

test('two sum sorted array 1', () => {
  const numbers = [2, 7, 11, 15]
  const target = 9

  expect(twoSum(numbers, target)).toEqual([1, 2])
})

test('two sum sorted array 2', () => {
  const numbers = [2, 3, 4]
  const target = 6

  expect(twoSum(numbers, target)).toEqual([1, 3])
})

test('two sum sorted array 3', () => {
  const numbers = [-1, 0]
  const target = -1

  expect(twoSum(numbers, target)).toEqual([1, 2])
})

test('two sum sorted array 4', () => {
  const numbers = [1, 2, 6, 16, 18, 19]
  const target = 22

  expect(twoSum(numbers, target)).toEqual([3, 4])
})
