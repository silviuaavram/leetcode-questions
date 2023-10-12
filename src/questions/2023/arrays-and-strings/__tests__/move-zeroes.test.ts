import {moveZeroes} from '../move-zeroes'

test('moves zeroes to the back 1', () => {
  const nums = [0, 1, 0, 3, 12]
  moveZeroes(nums)

  expect(nums).toEqual([1, 3, 12, 0, 0])
})

test('moves zeroes to the back 2', () => {
  const nums = [0]
  moveZeroes(nums)

  expect(nums).toEqual([0])
})

test('moves zeroes to the back 3', () => {
  const nums = [1, 2, 3, 0]
  moveZeroes(nums)

  expect(nums).toEqual([1, 2, 3, 0])
})

test('moves zeroes to the back 4', () => {
  const nums = [0, 0, 0, 1]
  moveZeroes(nums)

  expect(nums).toEqual([1, 0, 0, 0])
})
