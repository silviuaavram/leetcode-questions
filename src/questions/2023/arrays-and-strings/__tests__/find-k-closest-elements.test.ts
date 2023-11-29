import {findClosestElements} from '../find-k-closest-elements'

test('finds k closest elements 1', () => {
  const arr = [1, 2, 3, 4, 5]
  const k = 4
  const x = 3

  expect(findClosestElements(arr, k, x)).toEqual([1, 2, 3, 4])
})

test('finds k closest elements 2', () => {
  const arr = [1, 2, 3, 4, 5]
  const k = 4
  const x = -1

  expect(findClosestElements(arr, k, x)).toEqual([1, 2, 3, 4])
})

test('finds k closest elements 3', () => {
  const arr = [1, 2, 3, 4, 5]
  const k = 2
  const x = 2

  expect(findClosestElements(arr, k, x)).toEqual([1, 2])
})

test('finds k closest elements 4', () => {
  const arr = [1]
  const k = 1
  const x = 1

  expect(findClosestElements(arr, k, x)).toEqual([1])
})

test('finds k closest elements 5', () => {
  const arr = [0, 0, 1, 2, 3, 3, 4, 7, 7, 8]
  const k = 3
  const x = 5

  expect(findClosestElements(arr, k, x)).toEqual([3, 3, 4])
})

test('finds k closest elements 6', () => {
  const arr = [1, 3]
  const k = 1
  const x = 2

  expect(findClosestElements(arr, k, x)).toEqual([1])
})
