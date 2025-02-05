import {wordBreak} from './word-break'

test('checks if word can be assembled 1', () => {
  const s = 'leetcode'
  const wordDict = ['leet', 'code']

  expect(wordBreak(s, wordDict)).toEqual(true)
})

test('checks if word can be assembled 2', () => {
  const s = 'applepenapple'
  const wordDict = ['apple', 'pen']

  expect(wordBreak(s, wordDict)).toEqual(true)
})

test('checks if word can be assembled 3', () => {
  const s = 'catsandog'
  const wordDict = ['cats', 'dog', 'sand', 'and', 'cat']

  expect(wordBreak(s, wordDict)).toEqual(false)
})

test('checks if word can be assembled 4', () => {
  const s =
    '"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"'
  const wordDict = [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa',
    'aaaaaaaaa',
    'aaaaaaaaaa',
  ]

  expect(wordBreak(s, wordDict)).toEqual(false)
})
