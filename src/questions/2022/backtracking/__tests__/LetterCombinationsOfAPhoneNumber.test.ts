import {letterCombinations} from '../LetterCombinationsOfAPhoneNumber'

test('combinations for 29', function combination29() {
  expect(letterCombinations('23')).toEqual([
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

test('combinations for empty string', function combination29() {
  expect(letterCombinations('')).toEqual([])
})

test('combinations for 2', function combination29() {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
})
