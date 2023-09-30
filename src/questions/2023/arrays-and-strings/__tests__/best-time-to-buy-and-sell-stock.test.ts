import {maxProfit} from '../best-time-to-buy-and-sell-stock'

test('should calculate correct max profit 1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
})

test('should calculate correct max profit 2', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
})

test('should calculate correct max profit 3', () => {
  expect(maxProfit([1, 5, 6, 7, 8, 5, 10, 9, 8])).toEqual(9)
})

test('should calculate correct max profit 4', () => {
  expect(maxProfit([10, 5, 6, 7, 8, 5, 10, 3, 13])).toEqual(10)
})
