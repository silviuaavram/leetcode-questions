import {longestIncreasingPath} from '../longest-increasing-path-in-a-matrix'

test('finds the longest path 1', () => {
  const matrix = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ]

  expect(longestIncreasingPath(matrix)).toEqual(4)
})

test('finds the longest path 2', () => {
  const matrix = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ]

  expect(longestIncreasingPath(matrix)).toEqual(4)
})

test('finds the longest path 3', () => {
  const matrix = [[1]]
  expect(longestIncreasingPath(matrix)).toEqual(1)
})

test('finds the longest path 2', () => {
    const matrix = [
      [3, 4, 5],
      [2, 1, 1],
      [2, 2, 3],
    ]
  
    expect(longestIncreasingPath(matrix)).toEqual(5)
  })
