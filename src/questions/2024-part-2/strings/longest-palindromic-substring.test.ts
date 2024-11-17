import {longestPalindrome} from './longest-palindromic-substring'

test('returns largest palindromic substring 1', () => {
  const s = 'babad'

  expect(longestPalindrome(s)).toEqual('bab')
})

test('returns largest palindromic substring 2', () => {
  const s = 'cbbd'

  expect(longestPalindrome(s)).toEqual('bb')
})

test('returns largest palindromic substring 3', () => {
  const s = 'startrats'

  expect(longestPalindrome(s)).toEqual('startrats')
})

test('returns largest palindromic substring 4', () => {
  const s = 'zaaxxaay'

  expect(longestPalindrome(s)).toEqual('aaxxaa')
})

test('returns largest palindromic substring 5', () => {
  const s = 'a'

  expect(longestPalindrome(s)).toEqual('a')
})

test('returns largest palindromic substring 6', () => {
  const s = 'ac'

  expect(longestPalindrome(s)).toEqual('a')
})

test('returns largest palindromic substring 7', () => {
  const s = 'abb'

  expect(longestPalindrome(s)).toEqual('bb')
})

