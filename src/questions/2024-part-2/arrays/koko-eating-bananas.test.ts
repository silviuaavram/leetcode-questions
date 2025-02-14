import {minEatingSpeed} from './koko-eating-bananas'

test('determine eating speed 1', () => {
  const piles = [3, 6, 7, 11]
  const h = 8

  expect(minEatingSpeed(piles, h)).toEqual(4)
})

test('determine eating speed 2', () => {
  const piles = [30, 11, 23, 4, 20]
  const h = 5

  expect(minEatingSpeed(piles, h)).toEqual(30)
})

test('determine eating speed 3', () => {
  const piles = [30, 11, 23, 4, 20]
  const h = 6

  expect(minEatingSpeed(piles, h)).toEqual(23)
})
