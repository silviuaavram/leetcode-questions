import {groupAnagrams} from './group-anagrams'

test('groups anagrams 1', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

  expect(groupAnagrams(strs)).toEqual(
    expect.arrayContaining([
      expect.arrayContaining(['bat']),
      expect.arrayContaining(['nat', 'tan']),
      expect.arrayContaining(['ate', 'eat', 'tea']),
    ]),
  )
})

test('groups anagrams 2', () => {
  const strs = ['']

  expect(groupAnagrams(strs)).toEqual(expect.arrayContaining([['']]))
})

test('groups anagrams 3', () => {
  const strs = ['a']

  expect(groupAnagrams(strs)).toEqual(expect.arrayContaining([['a']]))
})

test('groups anagrams 4', () => {
  const strs = ['a', 'b', 'c', 'd', 'e', 'f']

  expect(groupAnagrams(strs)).toEqual(
    expect.arrayContaining([['a'], ['b'], ['c'], ['d'], ['e'], ['f']]),
  )
})
