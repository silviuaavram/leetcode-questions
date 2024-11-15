import {spiralOrder} from './spiral-matrix'

test('visits the matrix in spiral order 1', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('visits the matrix in spiral order 2', () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]

  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
})

test('visits the matrix in spiral order 3', () => {
  const matrix = [[1, 2, 3, 4]]

  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4])
})

test('visits the matrix in spiral order 4', () => {
  const matrix = [
    [1, 2],
    [3, 4],
  ]

  expect(spiralOrder(matrix)).toEqual([1, 2, 4, 3])
})

test('visits the matrix in spiral order 4', () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ]

  expect(spiralOrder(matrix)).toEqual([
    1, 2, 3, 4, 8, 12, 16, 20, 24, 23, 22, 21, 17, 13, 9, 5, 6, 7, 11, 15, 19,
    18, 14, 10,
  ])
})
