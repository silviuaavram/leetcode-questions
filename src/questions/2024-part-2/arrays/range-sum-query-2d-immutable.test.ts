import {NumMatrix} from './range-sum-query-2d-immutable'

test('retrieves values of sub-matrices in 1', () => {
  const numMatrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ])

  expect(numMatrix.sumRegion(2, 1, 4, 3)).toEqual(8) // return 8 (i.e sum of the red rectangle)
  expect(numMatrix.sumRegion(1, 1, 2, 2)).toEqual(11) // return 11 (i.e sum of the green rectangle)
  expect(numMatrix.sumRegion(1, 2, 2, 4)).toEqual(12) // return 12 (i.e sum of the blue rectangle)
})
