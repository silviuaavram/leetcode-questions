import {searchRange} from '../find-first-and-last-position-of-element-in-sorted-array'

test('get the positions 1', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  expect(searchRange(nums, target)).toEqual([3, 4])
})

test('get the positions 2', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('get the positions 3', () => {
  const nums = []
  const target = 0

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('get the positions 4', () => {
  const nums = [
    5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11,
    11, 11,
  ]
  const target = 8

  expect(searchRange(nums, target)).toEqual([3, 10])
})
