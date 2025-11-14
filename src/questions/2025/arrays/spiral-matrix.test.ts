import {spiralOrder} from './spiral-matrix'

test('goes through matrix in spiral order 1', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('goes through matrix in spiral order 2', () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]

  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
})

test('goes through matrix in spiral order 3', () => {
  const matrix = [[1]]

  expect(spiralOrder(matrix)).toEqual([1])
})
