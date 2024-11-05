import {maxProfit} from './best-time-to-buy-and-sell-stock'

test('returns the max profit 1', () => {
  const prices = [7, 1, 5, 3, 6, 4]

  expect(maxProfit(prices)).toEqual(5)
})

test('returns the max profit 2', () => {
  const prices = [7, 6, 4, 3, 1]

  expect(maxProfit(prices)).toEqual(0)
})

test('returns the max profit 3', () => {
  const prices = []

  expect(maxProfit(prices)).toEqual(0)
})

test('returns the max profit 4', () => {
  const prices = [6, 3, 4, 8, 2, 5]

  expect(maxProfit(prices)).toEqual(5)
})
