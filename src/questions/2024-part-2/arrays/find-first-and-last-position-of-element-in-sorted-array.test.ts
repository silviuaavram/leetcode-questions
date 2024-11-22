import {searchRange} from './find-first-and-last-position-of-element-in-sorted-array'

test('finds the indeces 1', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  expect(searchRange(nums, target)).toEqual([3, 4])
})

test('finds the indeces 2', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('finds the indeces 3', () => {
  const nums = []
  const target = 0

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('finds the indeces 4', () => {
  const nums = [5, 7, 8, 8, 8, 8, 8, 8, 10]
  const target = 8

  expect(searchRange(nums, target)).toEqual([2, 7])
})

test('finds the indeces 5', () => {
  const nums = [1]
  const target = 1

  expect(searchRange(nums, target)).toEqual([0, 0])
})
