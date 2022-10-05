import {isPalindrome} from '../ValidPalindrome'

test('panama sentence should be a palindrome', function panamaPalindrome() {
  const s = 'A man, a plan, a canal: Panama'

  expect(isPalindrome(s)).toBe(true)
})

test('racecar sentence should not be a palindrome', function panamaPalindrome() {
  const s = 'race a car'

  expect(isPalindrome(s)).toBe(false)
})

test('empty string should be a palindrome', function emptyPalindrome() {
  const s = ' '

  expect(isPalindrome(s)).toBe(true)
})

test('string with removable characters should be a palindrome', function removableCharactersPalindrome() {
  const s = " . \\ /.';        %"

  expect(isPalindrome(s)).toBe(true)
})
