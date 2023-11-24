import {wordBreak} from '../word-break'

test('word can be broken 1', () => {
  const s = 'leetcode',
    wordDict = ['leet', 'code']

  expect(wordBreak(s, wordDict)).toEqual(true)
})

test('word can be broken 2', () => {
  const s = 'applepenapple',
    wordDict = ['apple', 'pen']

  expect(wordBreak(s, wordDict)).toEqual(true)
})

test('word can be broken 3', () => {
  const s = 'catsandog',
    wordDict = ['cats', 'dog', 'sand', 'and', 'cat']

  expect(wordBreak(s, wordDict)).toEqual(false)
})

test('word can be broken 4', () => {
  const s =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    wordDict = [
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
