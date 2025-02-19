import {firstMissingPositive} from './first-missing-positive'

test('finds first missing positive 1', () => {
  const nums = [1, 2, 0]

  expect(firstMissingPositive(nums)).toEqual(3)
})

test('finds first missing positive 2', () => {
  const nums = [3, 4, -1, 1]

  expect(firstMissingPositive(nums)).toEqual(2)
})

test('finds first missing positive 3', () => {
  const nums = [7, 8, 9, 11, 12]

  expect(firstMissingPositive(nums)).toEqual(1)
})

test('finds first missing positive 4', () => {
  const nums = [1, 2, 3]

  expect(firstMissingPositive(nums)).toEqual(4)
})

test('finds first missing positive 5', () => {
  const nums = [0, 1, 2, 3]

  expect(firstMissingPositive(nums)).toEqual(4)
})

test('finds first missing positive 6', () => {
  const nums = [1,1]

  expect(firstMissingPositive(nums)).toEqual(2)
})
