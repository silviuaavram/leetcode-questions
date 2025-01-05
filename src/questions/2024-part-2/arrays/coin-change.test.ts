import {coinChange} from './coin-change'

test('gets the minimum number of coins 1', () => {
  const coins = [1, 2, 5]
  const amount = 11

  expect(coinChange(coins, amount)).toEqual(3)
})

test('gets the minimum number of coins 2', () => {
  const coins = [2]
  const amount = 3

  expect(coinChange(coins, amount)).toEqual(-1)
})

test('gets the minimum number of coins 3', () => {
  const coins = [1]
  const amount = 0

  expect(coinChange(coins, amount)).toEqual(0)
})

test('gets the minimum number of coins 4', () => {
  const coins = [1, 2, 5, 10]
  const amount = 11

  expect(coinChange(coins, amount)).toEqual(2)
})

test('gets the minimum number of coins 5', () => {
  const coins = [2, 5, 10]
  const amount = 1

  expect(coinChange(coins, amount)).toEqual(-1)
})

test('gets the minimum number of coins 6', () => {
  const coins = [1, 10, 100]
  const amount = 9

  expect(coinChange(coins, amount)).toEqual(9)
})
