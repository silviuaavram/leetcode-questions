import {sequentialDigits} from './sequential-digits'

test('returns sequential digit numbers 1', () => {
  expect(sequentialDigits(100, 300)).toEqual([123, 234])
})

test('returns sequential digit numbers 2', () => {
  expect(sequentialDigits(1000, 13000)).toEqual([
    1234, 2345, 3456, 4567, 5678, 6789, 12345,
  ])
})

test('returns sequential digit numbers 3', () => {
  expect(sequentialDigits(4, 7)).toEqual([4, 5, 6, 7])
})

test('returns sequential digit numbers 4', () => {
  expect(sequentialDigits(10, 1000000000)).toEqual([
    12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
    2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
    234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
    123456789,
  ])
})
