import {reverseVowels} from './reverse-vowels-of-a-string'

test('reverses vowels 1', () => {
  const s = 'IceCreAm'

  expect(reverseVowels(s)).toEqual('AceCreIm')
})

test('reverses vowels 2', () => {
  const s = 'leetcode'

  expect(reverseVowels(s)).toEqual('leotcede')
})

test('reverses vowels 3', () => {
  const s = '123456'

  expect(reverseVowels(s)).toEqual('123456')
})

test('reverses vowels 4', () => {
  const s = 'aeiou'

  expect(reverseVowels(s)).toEqual('uoiea')
})
