import { longestPalindrome } from "../LongestPalindromicSubstring"

test('"babad" has the "bab" palindrome', function palindromeLength3() {
  const s = "babad"
  const expected = "bab"

  expect(longestPalindrome(s)).toEqual(expected)
})

test('"cbbd" has the "bb" palindrome', function palindromeLengthw() {
  const s = "cbbd"
  const expected = "bb"

  expect(longestPalindrome(s)).toEqual(expected)
})

test('"" has the "" palindrome', function palindromeEmptyString() {
  const s = ""
  const expected = ""

  expect(longestPalindrome(s)).toEqual(expected)
})

test('"a" has the "a" palindrome', function palindromeOneCharacter() {
  const s = "a"
  const expected = "a"

  expect(longestPalindrome(s)).toEqual(expected)
})

test('"abbaxyyxa" has the "axyyxa" palindrome', function palindromeLargerOneAhead() {
  const s = "abbaxyyxa"
  const expected = "axyyxa"

  expect(longestPalindrome(s)).toEqual(expected)
})