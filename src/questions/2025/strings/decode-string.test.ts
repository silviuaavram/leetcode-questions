import {decodeString} from './decode-string'

test('decodes string 1', () => {
  const s = '3[a]2[bc]'

  expect(decodeString(s)).toEqual('aaabcbc')
})

test('decodes string 2', () => {
  const s = '3[a2[c]]'

  expect(decodeString(s)).toEqual('accaccacc')
})

test('decodes string 3', () => {
  const s = '2[abc]3[cd]ef'

  expect(decodeString(s)).toEqual('abcabccdcdcdef')
})

test('decodes string 4', () => {
  const s = '10[a]'

  expect(decodeString(s)).toEqual('aaaaaaaaaa')
})

test('decodes string 5', () => {
  const s = '3[abc2[de]]'

  expect(decodeString(s)).toEqual('abcdedeabcdedeabcdede')
})

test('decodes string 6', () => {
  const s = 'xx2[y]z2[a]'

  expect(decodeString(s)).toEqual('xxyyzaa')
})

test('decodes string 7', () => {
  const s = '3[y]'

  expect(decodeString(s)).toEqual('yyy')
})

test('decodes string 7', () => {
  const s = 'xyz3[a]3[b]'

  expect(decodeString(s)).toEqual('xyzaaabbb')
})

