import {kClosest} from './k-closest-points-to-origin'

test('gets the k closest points to origin 1', () => {
  const points = [
    [1, 3],
    [-2, 2],
  ]
  const k = 1

  expect(kClosest(points, k)).toEqual([[-2, 2]])
})

test('gets the k closest points to origin 2', () => {
  const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ]
  const k = 2

  expect(kClosest(points, k)).toEqual(
    expect.arrayContaining([
      [3, 3],
      [-2, 4],
    ]),
  )
})
