import {minimumSize} from './minimum-limit-of-balls-in-a-bag'

test('splits the bags in the best way 1', () => {
  const nums = [9]
  const maxOperations = 2

  expect(minimumSize(nums, maxOperations)).toEqual(3)
})

test('splits the bags in the best way 2', () => {
  const nums = [2, 4, 8, 2]
  const maxOperations = 4

  expect(minimumSize(nums, maxOperations)).toEqual(2)
})
