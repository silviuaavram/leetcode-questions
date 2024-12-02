import {findBuildings} from './buildings-with-an-ocean-view'

test('finds buildings with ocean view 1', () => {
  const heights = [4, 2, 3, 1]

  expect(findBuildings(heights)).toEqual([0, 2, 3])
})

test('finds buildings with ocean view 2', () => {
  const heights = [4, 3, 2, 1]

  expect(findBuildings(heights)).toEqual([0, 1, 2, 3])
})

test('finds buildings with ocean view 3', () => {
  const heights = [1, 3, 2, 4]

  expect(findBuildings(heights)).toEqual([3])
})

test('finds buildings with ocean view 4', () => {
  const heights = [1, 2, 2, 1]

  expect(findBuildings(heights)).toEqual([2,3])
})
