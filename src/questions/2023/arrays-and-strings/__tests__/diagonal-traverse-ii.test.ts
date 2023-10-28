import {findDiagonalOrder} from '../diagonal-traverse-ii'

test('traverses diagonals 1', () => {
  const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const expected = [1, 4, 2, 7, 5, 3, 8, 6, 9]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('traverses diagonals 2', () => {
  const nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]
  const expected = [1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('traverses diagonals 3', () => {
  const nums = [
    [14, 12, 19, 16, 9],
    [13, 14, 15, 8, 11],
    [11, 13, 1],
  ]
  const expected = [14, 13, 12, 11, 14, 19, 13, 15, 16, 1, 8, 9, 11]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('traverses diagonals 4', () => {
  const nums = [
    [14, 12, 19, 16, 9],
    [13, 14, 15, 8, 11],
    [11],
  ]
  const expected = [14, 13, 12, 11, 14, 19, 15, 16, 8, 9, 11]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})
