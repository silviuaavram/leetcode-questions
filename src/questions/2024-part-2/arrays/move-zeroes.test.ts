import {moveZeroes} from './move-zeroes'

test('moves zeroes 1', () => {
  const nums = [0, 1, 0, 3, 12]

  moveZeroes(nums)

  expect(nums).toEqual([1, 3, 12, 0, 0])
})

test('moves zeroes 2', () => {
  const nums = [0]

  moveZeroes(nums)

  expect(nums).toEqual([0])
})

test('moves zeroes 3', () => {
  const nums = [1, 2, 3, 4, 0, 5]

  moveZeroes(nums)

  expect(nums).toEqual([1, 2, 3, 4, 5, 0])
})

test('moves zeroes 4', () => {
  const nums = [1, 2, 0, 4, 0]

  moveZeroes(nums)

  expect(nums).toEqual([1, 2, 4, 0, 0])
})

test('moves zeroes 5', () => {
  const nums = [0, 0, 1, 2, 4]

  moveZeroes(nums)

  expect(nums).toEqual([1, 2, 4, 0, 0])
})
