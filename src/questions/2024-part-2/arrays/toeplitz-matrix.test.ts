import {isToeplitzMatrix} from './toeplitz-matrix'

test('checks if the matrix is toeplitz 1', () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]

  expect(isToeplitzMatrix(matrix)).toEqual(true)
})

test('checks if the matrix is toeplitz 2', () => {
  const matrix = [
    [1, 2],
    [2, 2],
  ]

  expect(isToeplitzMatrix(matrix)).toEqual(false)
})

test('checks if the matrix is toeplitz 3', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 3],
    ]
  
    expect(isToeplitzMatrix(matrix)).toEqual(false)
  })
