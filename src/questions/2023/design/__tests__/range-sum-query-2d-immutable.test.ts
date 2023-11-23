import {NumMatrix} from '../range-sum-query-2d-immutable'

test('returns the sums from the matrix', () => {
  const numMatrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ])

  expect(numMatrix.sumRegion(2, 1, 4, 3)).toEqual(8)
  expect(numMatrix.sumRegion(1, 1, 2, 2)).toEqual(11)
  expect(numMatrix.sumRegion(1, 2, 2, 4)).toEqual(12)
})
