import {largestIsland} from './making-a-large-island'

test('makes a large island 1', () => {
  const grid = [
    [1, 0],
    [0, 1],
  ]

  expect(largestIsland(grid)).toEqual(3)
})

test('makes a large island 2', () => {
  const grid = [
    [1, 0],
    [0, 1],
  ]

  expect(largestIsland(grid)).toEqual(3)
})

test('makes a large island 3', () => {
  const grid = [
    [1, 0],
    [0, 1],
  ]

  expect(largestIsland(grid)).toEqual(3)
})

test('makes a large island 4', () => {
  const grid = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
  ]

  expect(largestIsland(grid)).toEqual(7)
})

test('makes a large island 5', () => {
  const grid = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1],
  ]

  expect(largestIsland(grid)).toEqual(9)
})
