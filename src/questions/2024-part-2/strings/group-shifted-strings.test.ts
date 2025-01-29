import {groupStrings} from './group-shifted-strings'

test('groups strings 1', () => {
  const strings = ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']

  expect(groupStrings(strings)).toEqual(
    expect.arrayContaining([
      ['acef'],
      ['a', 'z'],
      ['abc', 'bcd', 'xyz'],
      ['az', 'ba'],
    ]),
  )
})

test('groups strings 2', () => {
  const strings = ['a']

  expect(groupStrings(strings)).toEqual(expect.arrayContaining([['a']]))
})
