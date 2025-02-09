import {canConstruct} from './construct-k-palindrome-strings'

test('can construct palindrome 1', () => {
  const s = 'annabelle',
    k = 2

  expect(canConstruct(s, k)).toEqual(true)
})

test('can construct palindrome 2', () => {
  const s = 'leetcode',
    k = 3

  expect(canConstruct(s, k)).toEqual(false)
})

test('can construct palindrome 3', () => {
  const s = 'true',
    k = 4

  expect(canConstruct(s, k)).toEqual(true)
})

test('can construct palindrome 4', () => {
  const s = 'cr',
    k = 7

  expect(canConstruct(s, k)).toEqual(false)
})
