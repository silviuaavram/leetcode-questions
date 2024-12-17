import {change} from './coin-change-ii'

test('combinations to give change 1', () => {
  const amount = 5
  const coins = [1, 2, 5]

  expect(change(amount, coins)).toEqual(4)
})

test('combinations to give change 2', () => {
  const amount = 3
  const coins = [2]

  expect(change(amount, coins)).toEqual(0)
})

test('combinations to give change 3', () => {
  const amount = 10
  const coins = [10]

  expect(change(amount, coins)).toEqual(1)
})

test('combinations to give change 4', () => {
  const amount = 6
  const coins = [1, 2, 2]

  expect(change(amount, coins)).toEqual(10)
})

test('combinations to give change 5', () => {
  const amount = 6
  const coins = [1, 2, 3]

  expect(change(amount, coins)).toEqual(7)
})

test('combinations to give change 6', () => {
  const amount = 0
  const coins = [7]

  expect(change(amount, coins)).toEqual(1)
})

test('combinations to give change 7', () => {
  const amount = 5
  const coins = [7]

  expect(change(amount, coins)).toEqual(0)
})
