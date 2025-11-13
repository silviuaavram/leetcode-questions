import {maxArea} from './container-with-most-water'

test('returns the container with the most water 1', () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

  expect(maxArea(height)).toEqual(49)
})

test('returns the container with the most water 2', () => {
  const height = [1, 1]

  expect(maxArea(height)).toEqual(1)
})
