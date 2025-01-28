import {findKthPositive} from './kth-missing-positive-number'

test('finds the kth missing number 1', () => {
  const arr = [2, 3, 4, 7, 11]
  const k = 5

  expect(findKthPositive(arr, k)).toEqual(9)
})

test('finds the kth missing number 2', () => {
  const arr = [1, 2, 3, 4]
  const k = 2

  expect(findKthPositive(arr, k)).toEqual(6)
})

test('finds the kth missing number 3', () => {
  const arr = [1, 10]
  const k = 2

  expect(findKthPositive(arr, k)).toEqual(3)
})

test('finds the kth missing number 4', () => {
  const arr = [1]
  const k = 3

  expect(findKthPositive(arr, k)).toEqual(4)
})

test('finds the kth missing number 5', () => {
  const arr = [2]
  const k = 1

  expect(findKthPositive(arr, k)).toEqual(1)
})

test('finds the kth missing number 6', () => {
  const arr = [5]
  const k = 3

  expect(findKthPositive(arr, k)).toEqual(3)
})
