import {lengthOfLongestSubstring} from './longest-substring-without-repeating-characters'

test('gets longest substring 1', () => {
  const s = 'abcabcbb'

  expect(lengthOfLongestSubstring(s)).toEqual(3)
})

test('gets longest substring 2', () => {
  const s = 'bbbbb'

  expect(lengthOfLongestSubstring(s)).toEqual(1)
})

test('gets longest substring 3', () => {
  const s = 'pwwkew'

  expect(lengthOfLongestSubstring(s)).toEqual(3)
})

test('gets longest substring 4', () => {
  const s = ''

  expect(lengthOfLongestSubstring(s)).toEqual(0)
})

test('gets longest substring 5', () => {
  const s = ' '

  expect(lengthOfLongestSubstring(s)).toEqual(1)
})

test('gets longest substring 6', () => {
  const s = 'a'

  expect(lengthOfLongestSubstring(s)).toEqual(1)
})
