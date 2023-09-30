import {findBuildings} from '../buildings-with-an-ocean-view'

test('only some buildings have ocean view', () => {
  const heights = [4, 2, 3, 1]

  expect(findBuildings(heights)).toEqual([0, 2, 3])
})

test('all buildings have ocean view', () => {
  const heights = [4, 3, 2, 1]

  expect(findBuildings(heights)).toEqual([0, 1, 2, 3])
})

test('only the last building has ocean view 1', () => {
  const heights = [1, 3, 2, 4]

  expect(findBuildings(heights)).toEqual([3])
})

test('no buildings means emtpy array return', () => {
  const heights = []

  expect(findBuildings(heights)).toEqual([])
})

test('only the last building has ocean view 2', () => {
  const heights = [4, 4, 3, 2, 5, 5]

  expect(findBuildings(heights)).toEqual([5])
})
