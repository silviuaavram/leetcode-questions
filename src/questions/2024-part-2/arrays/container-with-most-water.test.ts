import {maxArea} from './container-with-most-water'

test('returns the container with most water 1', () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

  expect(maxArea(height)).toEqual(49)
})

test('returns the container with most water 2', () => {
  const height = [1, 1]

  expect(maxArea(height)).toEqual(1)
})

test('returns the container with most water 3', () => {
  const height = [1, 1, 1, 1, 1, 1]

  expect(maxArea(height)).toEqual(5)
})

test('returns the container with most water 4', () => {
  const height = [1, 1, 6, 6, 1, 1]

  expect(maxArea(height)).toEqual(6)
})
