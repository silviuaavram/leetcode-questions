import {longestPalindrome} from './longest-palindromic-substring'

test('finds longest palindrome substring 1', () => {
  const s = 'babad'

  expect(longestPalindrome(s)).toEqual('bab')
})

test('finds longest palindrome substring 2', () => {
  const s = 'cbbd'

  expect(longestPalindrome(s)).toEqual('bb')
})

test('finds longest palindrome substring 3', () => {
  const s = 'abcdefgg'

  expect(longestPalindrome(s)).toEqual('gg')
})

test('finds longest palindrome substring 4', () => {
  const s = 'a'

  expect(longestPalindrome(s)).toEqual('a')
})
