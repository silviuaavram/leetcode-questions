import {minTotalDistance} from '../best-meeting-point'

test('gets the best meeting point 1', () => {
  const grid = [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ]

  expect(minTotalDistance(grid)).toEqual(6)
})
test('gets the best meeting point 2', () => {
  const grid = [[1, 1]]

  expect(minTotalDistance(grid)).toEqual(1)
})
