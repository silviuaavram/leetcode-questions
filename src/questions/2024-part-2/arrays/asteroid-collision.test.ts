import {asteroidCollision} from './asteroid-collision'

test('collision 1', () => {
  const asteroids = [5, 10, -5]

  expect(asteroidCollision(asteroids)).toEqual([5, 10])
})

test('collision 2', () => {
  const asteroids = [8, -8]

  expect(asteroidCollision(asteroids)).toEqual([])
})

test('collision 3', () => {
  const asteroids = [10, 2, -5]

  expect(asteroidCollision(asteroids)).toEqual([10])
})

test('collision 4', () => {
  const asteroids = [-2, -2, 1, -2]

  expect(asteroidCollision(asteroids)).toEqual([-2, -2, -2])
})
