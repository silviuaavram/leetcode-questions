import {isToeplitzMatrix} from '../toeplitz-matrix'

test('checks if it is a Toeplitz matrix 1', () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]

  expect(isToeplitzMatrix(matrix)).toEqual(true)
})

test('checks if it is a Toeplitz matrix 2', () => {
  const matrix = [
    [1, 2],
    [2, 2],
  ]

  expect(isToeplitzMatrix(matrix)).toEqual(false)
})

test('checks if it is a Toeplitz matrix 3', () => {
    const matrix = [
      [1, 2, 3, 4, 5, 6],
      [5, 1, 2, 3, 4, 5],
      [9, 5, 1, 2, 3, 3],
    ]
  
    expect(isToeplitzMatrix(matrix)).toEqual(false)
  })