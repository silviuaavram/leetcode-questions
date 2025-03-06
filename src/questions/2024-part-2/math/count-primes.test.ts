import { countPrimes } from "./count-primes";

test('counts primes 1', () => {
  expect(countPrimes(10)).toEqual(4)
})

test('counts primes 2', () => {
  expect(countPrimes(1)).toEqual(0)
})

test('counts primes 3', () => {
  expect(countPrimes(0)).toEqual(0)
})

test('counts primes 4', () => {
  expect(countPrimes(21)).toEqual(8)
})

test('counts primes 5', () => {
  expect(countPrimes(2)).toEqual(0)
})

test('counts primes 6', () => {
  expect(countPrimes(3)).toEqual(1)
})