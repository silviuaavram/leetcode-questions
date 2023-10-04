import {groupStrings} from '../group-shifted-strings'

test('groups strings 1', () => {
  const strings = ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']
  const result = [['acef'], ['a', 'z'], ['abc', 'bcd', 'xyz'], ['az', 'ba']]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(result))
})

test('groups strings 2', () => {
  const strings = ['a']
  const result = [['a']]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(result))
})
