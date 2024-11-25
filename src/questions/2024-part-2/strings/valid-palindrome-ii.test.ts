import {validPalindrome} from './valid-palindrome-ii'

test('checks if a string is a palindrome if we remove at most one char 1', () => {
  const s = 'aba'

  expect(validPalindrome(s)).toEqual(true)
})

test('checks if a string is a palindrome if we remove at most one char 2', () => {
  const s = 'abca'

  expect(validPalindrome(s)).toEqual(true)
})

test('checks if a string is a palindrome if we remove at most one char 3', () => {
  const s = 'abc'

  expect(validPalindrome(s)).toEqual(false)
})

test('checks if a string is a palindrome if we remove at most one char 4', () => {
  const s = 'abcbaa'

  expect(validPalindrome(s)).toEqual(true)
})

test('checks if a string is a palindrome if we remove at most one char 4', () => {
  const s = 'deeee'

  expect(validPalindrome(s)).toEqual(true)
})
