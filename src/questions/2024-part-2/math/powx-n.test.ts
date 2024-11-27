import {myPow} from './powx-n'

test('return x to the power of n 1', () => {
  const x = 2.0
  const n = 10

  expect(myPow(x, n)).toEqual(1024.0)
})

test('return x to the power of n 2', () => {
  const x = 2.1
  const n = 3

  expect(myPow(x, n)).toEqual(9.261)
})

test('return x to the power of n 3', () => {
  const x = 2.0
  const n = -2

  expect(myPow(x, n)).toEqual(0.25)
})

test('return x to the power of n 4', () => {
  const x = 8.88023
  const n = 3

  expect(myPow(x, n)).toEqual(700.28148)
})

test('return x to the power of n 5', () => {
  const x = 0.00001
  const n = 2147483647

  expect(myPow(x, n)).toEqual(0)
})
