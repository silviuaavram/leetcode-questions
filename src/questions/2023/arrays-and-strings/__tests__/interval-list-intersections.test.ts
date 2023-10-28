import {intervalIntersection} from '../interval-list-intersections'

test('returns intersections 1', () => {
  const firstList = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ]
  const secondList = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ]

  expect(intervalIntersection(firstList, secondList)).toEqual([
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ])
})

test('returns intersections 2', () => {
  const firstList = [
    [1, 3],
    [5, 9],
  ]
  const secondList = []

  expect(intervalIntersection(firstList, secondList)).toEqual([])
})

test('returns intersections 3', () => {
  const firstList = [
    [1, 3],
    [8, 9],
    [13, 14],
    [18, 22],
    [24, 25],
  ]
  const secondList = [
    [4, 5],
    [8, 9],
    [12, 15],
    [19, 21],
    [24, 27],
  ]

  expect(intervalIntersection(firstList, secondList)).toEqual([
    [8, 9],
    [13, 14],
    [19, 21],
    [24, 25],
  ])
})
