import {smallestEvenMultiple} from './smallest-even-multiple'

test('smallest even multiple 1', () => {
  expect(smallestEvenMultiple(5)).toEqual(10)
})

test('smallest even multiple 2', () => {
  expect(smallestEvenMultiple(6)).toEqual(6)
})

test('smallest even multiple 3', () => {
  expect(smallestEvenMultiple(1)).toEqual(2)
})

test('smallest even multiple 4', () => {
  expect(smallestEvenMultiple(23)).toEqual(46)
})
