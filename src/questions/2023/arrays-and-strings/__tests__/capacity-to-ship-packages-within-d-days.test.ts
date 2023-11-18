import {shipWithinDays} from '../capacity-to-ship-packages-within-d-days'

test('returns the minimum capacity of the ship 1', () => {
  const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const days = 5

  expect(shipWithinDays(weights, days)).toEqual(15)
})

test('returns the minimum capacity of the ship 2', () => {
  const weights = [3, 2, 2, 4, 1, 4]
  const days = 3

  expect(shipWithinDays(weights, days)).toEqual(6)
})

test('returns the minimum capacity of the ship 3', () => {
  const weights = [1, 2, 3, 1, 1]
  const days = 4

  expect(shipWithinDays(weights, days)).toEqual(3)
})
