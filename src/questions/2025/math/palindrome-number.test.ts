import {isPalindrome} from './palindrome-number'

test('checks if number is palindrome 1', () => {
  const x = 121

  expect(isPalindrome(x)).toEqual(true)
})

test('checks if number is palindrome 2', () => {
  const x = -121

  expect(isPalindrome(x)).toEqual(false)
})

test('checks if number is palindrome 3', () => {
  const x = 10

  expect(isPalindrome(x)).toEqual(false)
})
