import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

test('length of longest substring without repeating 1', () => {
  const s = "abcabcbb"

  expect(lengthOfLongestSubstring(s)).toEqual(3)
})

test('length of longest substring without repeating 2', () => {
  const s = "bbbbb"

  expect(lengthOfLongestSubstring(s)).toEqual(1)
})

test('length of longest substring without repeating 3', () => {
  const s = "pwwkew"

  expect(lengthOfLongestSubstring(s)).toEqual(3)
})

test('length of longest substring without repeating 4', () => {
  const s = "a"

  expect(lengthOfLongestSubstring(s)).toEqual(1)
})

test('length of longest substring without repeating 5', () => {
  const s = "aaabccxyzt"

  expect(lengthOfLongestSubstring(s)).toEqual(5)
})


