import {maxScore} from './maximum-score-after-splitting-a-string'

test('returns the best possible score 1', () => {
  expect(maxScore('011101')).toEqual(5)
})

test('returns the best possible score 2', () => {
  expect(maxScore('011101')).toEqual(5)
})

test('returns the best possible score 3', () => {
  expect(maxScore('1111')).toEqual(3)
})

test('returns the best possible score 4', () => {
  expect(maxScore('00001111')).toEqual(8)
})

test('returns the best possible score 5', () => {
  expect(maxScore('11101111')).toEqual(6)
})

test('returns the best possible score 6', () => {
  expect(maxScore('00')).toEqual(1)
})

test('returns the best possible score 7', () => {
  expect(maxScore('01001')).toEqual(4)
})

test('returns the best possible score 8', () => {
  expect(maxScore('10')).toEqual(0)
})
