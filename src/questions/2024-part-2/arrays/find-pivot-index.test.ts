import {pivotIndex} from './find-pivot-index'

test('finds pivot index 1', () => {
  const nums = [1, 7, 3, 6, 5, 6]

  expect(pivotIndex(nums)).toEqual(3)
})

test('finds pivot index 2', () => {
  const nums = [1, 2, 3]

  expect(pivotIndex(nums)).toEqual(-1)
})

test('finds pivot index 3', () => {
  const nums = [2, 1, -1]

  expect(pivotIndex(nums)).toEqual(0)
})

test('finds pivot index 4', () => {
  const nums = [1,2,3,5,-2]

  expect(pivotIndex(nums)).toEqual(2)
})
