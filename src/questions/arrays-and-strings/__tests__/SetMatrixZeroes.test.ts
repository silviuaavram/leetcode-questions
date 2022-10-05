import {setZeroes} from '../SetMatrixZeroes'

test('sets zeroes from the center', function zeroesFromCenter() {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]
  const expected = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]

  setZeroes(matrix)

  expect(matrix).toEqual(expected)
})

test('sets zeroes from corners', function zeroesFromCorners() {
  const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]
  const expected = [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]

  setZeroes(matrix)

  expect(matrix).toEqual(expected)
})

test('sets zero on 1x1', function zeroMatrix() {
  const matrix = [[0]]
  const expected = [[0]]

  setZeroes(matrix)

  expect(matrix).toEqual(expected)
})

test('returns empty matrix', function emptyMatrix() {
  const matrix = [[]]
  const expected = [[]]

  setZeroes(matrix)

  expect(matrix).toEqual(expected)
})

test('sets all matrix to 0', function allTo0() {
  const matrix = [
    [1, 2, 3, 4, 0, 5],
    [2, 0, 2, 0, 5, 6],
  ]
  const expected = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]

  setZeroes(matrix)

  expect(matrix).toEqual(expected)
})
