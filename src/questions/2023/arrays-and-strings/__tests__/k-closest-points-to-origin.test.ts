import {kClosest} from '../k-closest-points-to-origin'

test('return k closes points 1', () => {
  const points = [
    [1, 3],
    [-2, 2],
  ]
  expect(kClosest(points, 1)).toEqual([[-2, 2]])
})

test('return k closes points 2', () => {
  const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ]
  expect(kClosest(points, 2)).toEqual([
    [3, 3],
    [-2, 4],
  ])
})
