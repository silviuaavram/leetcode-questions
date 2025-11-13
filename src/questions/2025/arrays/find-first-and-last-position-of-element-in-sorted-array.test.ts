import {searchRange} from './find-first-and-last-position-of-element-in-sorted-array'

test('finds first and last positions of element in sorted array 1', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  expect(searchRange(nums, target)).toEqual([3, 4])
})

test('finds first and last positions of element in sorted array 2', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('finds first and last positions of element in sorted array 3', () => {
  const nums = []
  const target = 6

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('finds first and last positions of element in sorted array 4', () => {
  const nums = [1, 2, 3, 5, 6, 7]
  const target = 2

  expect(searchRange(nums, target)).toEqual([1, 1])
})
