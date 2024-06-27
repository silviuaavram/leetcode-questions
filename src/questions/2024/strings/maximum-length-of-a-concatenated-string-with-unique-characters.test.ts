import {maxLength} from './maximum-length-of-a-concatenated-string-with-unique-characters'

test('max length of concatenated unique string 1', () => {
  const arr = ['un', 'iq', 'ue']

  expect(maxLength(arr)).toEqual(4)
})

test('max length of concatenated unique string 2', () => {
  const arr = ['cha', 'r', 'act', 'ers']

  expect(maxLength(arr)).toEqual(6)
})

test('max length of concatenated unique string 3', () => {
  const arr = ['abcdefghijklmnopqrstuvwxyz']

  expect(maxLength(arr)).toEqual(26)
})

test('max length of concatenated unique string 4', () => {
  const arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
  ]

  expect(maxLength(arr)).toEqual(16)
})
