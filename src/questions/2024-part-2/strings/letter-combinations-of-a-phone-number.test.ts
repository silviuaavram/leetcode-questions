import {letterCombinations} from './letter-combinations-of-a-phone-number'

test('returns the letter combinations 1', () => {
  const digits = '23'

  expect(letterCombinations(digits)).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ])
})

test('returns the letter combinations 2', () => {
  const digits = ''

  expect(letterCombinations(digits)).toEqual([])
})

test('returns the letter combinations 3', () => {
  const digits = '2'

  expect(letterCombinations(digits)).toEqual(['a', 'b', 'c'])
})

test('returns the letter combinations 4', () => {
  const digits = '222'

  expect(letterCombinations(digits)).toEqual([
    'aaa',
    'aab',
    'aac',
    'aba',
    'abb',
    'abc',
    'aca',
    'acb',
    'acc',
    'baa',
    'bab',
    'bac',
    'bba',
    'bbb',
    'bbc',
    'bca',
    'bcb',
    'bcc',
    'caa',
    'cab',
    'cac',
    'cba',
    'cbb',
    'cbc',
    'cca',
    'ccb',
    'ccc',
  ])
})
