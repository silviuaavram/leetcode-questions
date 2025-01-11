import {compress} from './string-compression'

test('compresses string 1', () => {
  const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']

  expect(compress(chars)).toEqual(6)
})

test('compresses string 2', () => {
  const chars = ['a']

  expect(compress(chars)).toEqual(1)
})

test('compresses string 3', () => {
  const chars = [
    'a',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
  ]

  expect(compress(chars)).toEqual(4)
})

test('compresses string 4', () => {
  const chars = ['a', 'a', 'a', 'a', 'b', 'b', 'b']

  expect(compress(chars)).toEqual(4)
})
