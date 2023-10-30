import {isPalindrome} from '../valid-palindrome'

test('valid palindrom 1', () => {
  const s = 'A man, a plan, a canal: Panama'

  expect(isPalindrome(s)).toEqual(true)
})

test('valid palindrom 2', () => {
  const s = 'race a car'

  expect(isPalindrome(s)).toEqual(false)
})

test('valid palindrom 3', () => {
  const s = ' '

  expect(isPalindrome(s)).toEqual(true)
})

test('valid palindrom 4', () => {
  const s = 'ab_a'

  expect(isPalindrome(s)).toEqual(true)
})
