import {merge} from './merge-intervals'

test('merges intervals 1', () => {
  const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]

  expect(merge(intervals)).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ])
})

test('merges intervals 2', () => {
  const intervals = [
    [1, 4],
    [4, 5],
  ]

  expect(merge(intervals)).toEqual([[1, 5]])
})

test('merges intervals 3', () => {
  const intervals = [
    [1, 8],
    [4, 5],
  ]

  expect(merge(intervals)).toEqual([[1, 8]])
})
