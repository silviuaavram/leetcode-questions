import {isPalindrome} from './valid-palindrome'

test('checks if palindrome 1', () => {
  const s = 'A man, a plan, a canal: Panama'

  expect(isPalindrome(s)).toEqual(true)
})

test('checks if palindrome 2', () => {
  const s = 'race a car'

  expect(isPalindrome(s)).toEqual(false)
})

test('checks if palindrome 3', () => {
  const s = ' '

  expect(isPalindrome(s)).toEqual(true)
})

test('checks if palindrome 4', () => {
  const s = 's'

  expect(isPalindrome(s)).toEqual(true)
})

test('checks if palindrome 5', () => {
  const s = 'ab_a'

  expect(isPalindrome(s)).toEqual(true)
})
