import {findDiagonalOrder} from './diagonal-traverse'

test('traverses the matrix in diagonal order 1', () => {
  const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  expect(findDiagonalOrder(mat)).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
})

test('traverses the matrix in diagonal order 2', () => {
  const mat = [
    [1, 2],
    [3, 4],
  ]

  expect(findDiagonalOrder(mat)).toEqual([1, 2, 3, 4])
})
