import {isAnagram} from './valid-anagram'

test('checks if anagram 1', () => {
  const s = 'anagram'
  const t = 'nagaram'

  expect(isAnagram(s, t)).toEqual(true)
})

test('checks if anagram 2', () => {
  const s = 'rat'
  const t = 'car'

  expect(isAnagram(s, t)).toEqual(false)
})

test('checks if anagram 3', () => {
  const s = 'ra'
  const t = 'car'

  expect(isAnagram(s, t)).toEqual(false)
})
