import {findDiagonalOrder} from './diagonal-traverse-ii'

test('parses on the diagonal 1', () => {
  const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  expect(findDiagonalOrder(nums)).toEqual([1, 4, 2, 7, 5, 3, 8, 6, 9])
})

test('parses on the diagonal 2', () => {
  const nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]

  expect(findDiagonalOrder(nums)).toEqual([
    1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16,
  ])
})
