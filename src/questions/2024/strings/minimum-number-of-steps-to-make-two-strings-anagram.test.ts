import {minSteps} from './minimum-number-of-steps-to-make-two-strings-anagram'

test('minimum steps to make an anagram 1', () => {
  const s = 'bab'
  const t = 'aba'

  expect(minSteps(s, t)).toEqual(1)
})

test('minimum steps to make an anagram 2', () => {
  const s = 'leetcode'
  const t = 'practice'

  expect(minSteps(s, t)).toEqual(5)
})

test('minimum steps to make an anagram 3', () => {
  const s = 'anagram'
  const t = 'mangaar'

  expect(minSteps(s, t)).toEqual(0)
})

test('minimum steps to make an anagram 4', () => {
  const s = 'bboonn'
  const t = 'alabin'

  expect(minSteps(s, t)).toEqual(4)
})
