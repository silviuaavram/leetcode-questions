import {fizzBuzz} from './fizz-buzz'

test('fizz buzz 1', () => {
  const n = 3

  expect(fizzBuzz(n)).toEqual(['1', '2', 'Fizz'])
})

test('fizz buzz 2', () => {
  const n = 5

  expect(fizzBuzz(n)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
})

test('fizz buzz 3', () => {
  const n = 15

  expect(fizzBuzz(n)).toEqual([
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
  ])
})
