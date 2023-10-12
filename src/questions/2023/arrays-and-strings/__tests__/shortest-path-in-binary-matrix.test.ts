import {shortestPathBinaryMatrix} from '../shortest-path-in-binary-matrix'

test('shortest path in a matrix 1', () => {
  const grid = [
    [0, 1],
    [1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(2)
})

test('shortest path in a matrix 2', () => {
  const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(4)
})

test('shortest path in a matrix 3', () => {
  const grid = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(-1)
})

test('shortest path in a matrix 4', () => {
  const grid = [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(6)
})

test('shortest path in a matrix 5', () => {
  const grid = [
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(14)
})

test('shortest path in a matrix 6', () => {
  const grid = [
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(-1)
})

test('shortest path in a matrix 7', () => {
  const grid = [
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(8)
})
