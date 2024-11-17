import {floodFill} from './flood-fill'

test('fills picture 1', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ]
  const sr = 1
  const sc = 1
  const color = 2

  expect(floodFill(image, sr, sc, color)).toEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ])
})

test('fills picture 2', () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ]
  const sr = 0
  const sc = 0
  const color = 0

  expect(floodFill(image, sr, sc, color)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ])
})

test('fills picture 3', () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ]
  const sr = 0
  const sc = 0
  const color = 1

  expect(floodFill(image, sr, sc, color)).toEqual([
    [1, 1, 1],
    [1, 1, 1],
  ])
})
