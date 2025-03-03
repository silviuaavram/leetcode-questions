import {search} from './search-in-rotated-sorted-array'

test('searches in rotated sorted array 1', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 0

  expect(search(nums, target)).toEqual(4)
})

test('searches in rotated sorted array 2', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 3

  expect(search(nums, target)).toEqual(-1)
})

test('searches in rotated sorted array 3', () => {
  const nums = [1]
  const target = 0

  expect(search(nums, target)).toEqual(-1)
})
