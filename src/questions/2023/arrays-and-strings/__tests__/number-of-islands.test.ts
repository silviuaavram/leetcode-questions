import {numIslands} from '../number-of-islands'

test('returns islands 1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]

  expect(numIslands(grid)).toEqual(1)
})

test('returns islands 2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]

  expect(numIslands(grid)).toEqual(3)
})

test('returns islands 3', () => {
  const grid = [['1']]

  expect(numIslands(grid)).toEqual(1)
})

test('returns islands 4', () => {
  const grid = [['0']]

  expect(numIslands(grid)).toEqual(0)
})

test('returns islands 5', () => {
  const grid = [['0', '1', '0', '1']]

  expect(numIslands(grid)).toEqual(2)
})

test('returns islands 6', () => {
  const grid = [['0'], ['1'], ['0'], ['1']]

  expect(numIslands(grid)).toEqual(2)
})
