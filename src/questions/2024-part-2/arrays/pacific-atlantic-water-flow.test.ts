import {pacificAtlantic} from './pacific-atlantic-water-flow'

test('checks water flow 1', () => {
  const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]

  expect(pacificAtlantic(heights)).toEqual(
    expect.arrayContaining([
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0],
    ]),
  )
})

test('checks water flow 2', () => {
  const heights = [[1]]

  expect(pacificAtlantic(heights)).toEqual([[0, 0]])
})

test('checks water flow 3', () => {
  const heights = [
    [2, 1],
    [1, 2],
  ]

  expect(pacificAtlantic(heights)).toEqual([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ])
})

test('checks water flow 4', () => {
  const heights = [
    [3, 3, 3, 3, 3, 3],
    [3, 0, 3, 3, 0, 3],
    [3, 3, 3, 3, 3, 3],
  ]

  expect(pacificAtlantic(heights)).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 2],
    [1, 3],
    [1, 5],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ])
})
