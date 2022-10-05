import {groupAnagrams} from '../GroupAnagrams'

test('find 3 anagram groups', function anagrams3Groups() {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

  expect(groupAnagrams(strs)).toEqual(
    expect.arrayContaining([
      expect.arrayContaining(['bat']),
      expect.arrayContaining(['nat', 'tan']),
      expect.arrayContaining(['ate', 'eat', 'tea']),
    ]),
  )
})

test('returns empty group', function emptyGroup() {
  expect(groupAnagrams([''])).toEqual([['']])
})

test('returns one string group', function oneStringGroup() {
  expect(groupAnagrams(['a'])).toEqual([['a']])
})

test('find anagram groups of differnt length', function anagrams3Groups() {
  const strs = ['ab', 'aab', 'baa', 'a', 'bb', 'ba']

  expect(groupAnagrams(strs)).toEqual(
    expect.arrayContaining([
      expect.arrayContaining(['a']),
      expect.arrayContaining(['ab', 'ba']),
      expect.arrayContaining(['bb']),
      expect.arrayContaining(['baa', 'aab']),
    ]),
  )
})
