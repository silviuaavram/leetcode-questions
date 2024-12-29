import {shipWithinDays} from './capacity-to-ship-packages-within-d-days'

test('capacity to ship within D days 1', () => {
  const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const days = 5

  expect(shipWithinDays(weights, days)).toEqual(15)
})

test('capacity to ship within D days 2', () => {
  const weights = [3, 2, 2, 4, 1, 4]
  const days = 3

  expect(shipWithinDays(weights, days)).toEqual(6)
})

test('capacity to ship within D days 3', () => {
  const weights = [1, 2, 3, 1, 1]
  const days = 4

  expect(shipWithinDays(weights, days)).toEqual(3)
})
