import {orangesRotting} from './rotting-oranges'

test('spreads rot between oranges 1', () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]

  expect(orangesRotting(grid)).toEqual(4)
})

test('spreads rot between oranges 2', () => {
  const grid = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]

  expect(orangesRotting(grid)).toEqual(-1)
})

test('spreads rot between oranges 3', () => {
  const grid = [[0, 2]]

  expect(orangesRotting(grid)).toEqual(0)
})
