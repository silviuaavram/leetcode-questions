import {missingElement} from '../missing-element-in-sorted-array'

test('finds the missing element 1', () => {
  const nums = [4, 7, 9, 10]
  const k = 1

  expect(missingElement(nums, k)).toEqual(5)
})

test('finds the missing element 2', () => {
  const nums = [4, 7, 9, 10]
  const k = 3

  expect(missingElement(nums, k)).toEqual(8)
})

test('finds the missing element 3', () => {
  const nums = [1, 2, 4]
  const k = 3

  expect(missingElement(nums, k)).toEqual(6)
})

test('finds the missing element 4', () => {
  const nums = [6, 9, 10, 11, 14, 17]
  const k = 3

  expect(missingElement(nums, k)).toEqual(12)
})

test('finds the missing element 5', () => {
  const nums = [6, 9, 10, 11, 14, 17]
  const k = 6

  expect(missingElement(nums, k)).toEqual(16)
})

test('finds the missing element 6', () => {
  const nums = [6, 7, 10, 11, 19, 21, 23]

  const k = 2

  expect(missingElement(nums, k)).toEqual(9)
})
