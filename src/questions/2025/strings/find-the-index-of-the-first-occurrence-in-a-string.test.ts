import {strStr} from './find-the-index-of-the-first-occurrence-in-a-string'

test('finds the first occurance of a string inside another string 1', () => {
  const haystack = 'sadbutsad'
  const needle = 'sad'

  expect(strStr(haystack, needle)).toEqual(0)
})

test('finds the first occurance of a string inside another string 2', () => {
  const haystack = 'leetcode'
  const needle = 'leeto'

  expect(strStr(haystack, needle)).toEqual(-1)
})

test('finds the first occurance of a string inside another string 3', () => {
  const haystack = 'ssasssa'
  const needle = 'sssa'

  expect(strStr(haystack, needle)).toEqual(3)
})

test('finds the first occurance of a string inside another string 4', () => {
  const haystack = 'leetcode'
  const needle = 'etc'

  expect(strStr(haystack, needle)).toEqual(2)
})