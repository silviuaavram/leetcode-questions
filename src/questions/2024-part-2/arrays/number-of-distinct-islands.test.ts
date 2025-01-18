import {numDistinctIslands} from './number-of-distinct-islands'

test('counts islands 1', () => {
  const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ]

  expect(numDistinctIslands(grid)).toEqual(1)
})

test('counts islands 2', () => {
  const grid = [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]

  expect(numDistinctIslands(grid)).toEqual(3)
})
