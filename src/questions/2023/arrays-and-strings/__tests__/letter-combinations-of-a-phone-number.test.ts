import {letterCombinations} from '../letter-combinations-of-a-phone-number'

test('generates the strings for 23', () => {
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
test('generates the strings for 2', () => {
  const digits = '2'

  expect(letterCombinations(digits)).toEqual(['a', 'b', 'c'])
})
test('generates the strings for empty string', () => {
  const digits = ''

  expect(letterCombinations(digits)).toEqual([])
})
