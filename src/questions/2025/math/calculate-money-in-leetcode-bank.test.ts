import { totalMoney } from "./calculate-money-in-leetcode-bank";

test('finds the total money saved 1', () => {
  const n = 4

  expect(totalMoney(n)).toEqual(10)
})

test('finds the total money saved 2', () => {
  const n = 10

  expect(totalMoney(n)).toEqual(37)
})

test('finds the total money saved 3', () => {
  const n = 20

  expect(totalMoney(n)).toEqual(96)
})

