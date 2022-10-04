import {spiralOrder} from '../SpiralMatrix'

test('prints a 3x3 matrix', function print3x3Matrix() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints a 4x4 matrix', function print4x4Matrix() {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]
  const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints a 2x2 matrix', function print2x2Matrix() {
  const matrix = [
    [1, 2],
    [4, 5],
  ]
  const expected = [1, 2, 5, 4]

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints a 1x1 matrix', function print1x1Matrix() {
  const matrix = [[2]]
  const expected = [2]

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints an empty matrix', function printEmptyMatrix() {
  const matrix = [[]]
  const expected = []

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints a 3x4 matrix', function print3x3Matrix() {
  const matrix = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
  ]
  const expected = [1, 2, 3, 10, 11, 12, 9, 8, 7, 4, 5, 6]

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints a 1x5 matrix', function print3x3Matrix() {
  const matrix = [[1, 2, 3, 10, 11]]
  const expected = [1, 2, 3, 10, 11]

  expect(spiralOrder(matrix)).toEqual(expected)
})

test('prints a 5x1 matrix', function print3x3Matrix() {
  const matrix = [[1], [2], [3], [10], [11]]
  const expected = [1, 2, 3, 10, 11]

  expect(spiralOrder(matrix)).toEqual(expected)
})
