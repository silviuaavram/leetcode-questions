import {findDiagonalOrder} from '../diagonal-traverse'

test('traverses diagonally 1', () => {
  const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const expected = [1, 2, 4, 7, 5, 3, 6, 8, 9]

  expect(findDiagonalOrder(mat)).toEqual(expected)
})

test('traverses diagonally 2', () => {
  const mat = [
    [1, 2],
    [3, 4],
  ]
  const expected = [1, 2, 3, 4]

  expect(findDiagonalOrder(mat)).toEqual(expected)
})
