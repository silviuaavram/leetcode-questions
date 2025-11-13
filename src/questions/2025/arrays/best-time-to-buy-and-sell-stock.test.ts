import {maxProfit} from './best-time-to-buy-and-sell-stock'

test('gets the max profit from selling stock 1', () => {
  const prices = [7, 1, 5, 3, 6, 4]

  expect(maxProfit(prices)).toEqual(5)
})

test('gets the max profit from selling stock 2', () => {
  const prices = [7, 6, 4, 3, 1]

  expect(maxProfit(prices)).toEqual(0)
})

test('gets the max profit from selling stock 3', () => {
  const prices = [1, 4, 2, 6, 11, 0, 11]

  expect(maxProfit(prices)).toEqual(11)
})
