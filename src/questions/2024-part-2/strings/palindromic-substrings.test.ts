import {countSubstrings} from './palindromic-substrings'

test('counts palindromic substrings 1', () => {
  const s = 'abc'

  expect(countSubstrings(s)).toEqual(3)
})

test('counts palindromic substrings 2', () => {
  const s = 'aaa'

  expect(countSubstrings(s)).toEqual(6)
})

test('counts palindromic substrings 3', () => {
  const s = 'aba'

  expect(countSubstrings(s)).toEqual(4)
})

test('counts palindromic substrings 4', () => {
  const s = 'abba'

  expect(countSubstrings(s)).toEqual(6)
})

test('counts palindromic substrings 5', () => {
  const s = 'abcba'

  expect(countSubstrings(s)).toEqual(7)
})

test('counts palindromic substrings 6', () => {
  const s = 'abcbaxz'

  expect(countSubstrings(s)).toEqual(9)
})
