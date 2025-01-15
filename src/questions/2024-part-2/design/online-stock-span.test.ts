import {StockSpanner} from './online-stock-span'

test('stock spanner 1', () => {
  const stockSpanner = new StockSpanner()

  expect(stockSpanner.next(100)).toEqual(1) // return 1
  expect(stockSpanner.next(80)).toEqual(1) // return 1
  expect(stockSpanner.next(60)).toEqual(1) // return 1
  expect(stockSpanner.next(70)).toEqual(2) // return 2
  expect(stockSpanner.next(60)).toEqual(1) // return 1
  expect(stockSpanner.next(75)).toEqual(4) // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
  expect(stockSpanner.next(85)).toEqual(6) // return 6
})

test('stock spanner 2', () => {
  const stockSpanner = new StockSpanner()

  expect(stockSpanner.next(29)).toEqual(1) // return 1
  expect(stockSpanner.next(91)).toEqual(2) // return 2
  expect(stockSpanner.next(62)).toEqual(1) // return 1
  expect(stockSpanner.next(76)).toEqual(2) // return 2
  expect(stockSpanner.next(51)).toEqual(1) // return 1
})
