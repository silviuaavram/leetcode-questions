import {reverseString} from '../ReverseString'

test('reverses a string with even number of characters', function evenNumberOfChars() {
  const s = ['h', 'e', 'l', 'l', 'o']

  reverseString(s)

  expect(s).toEqual(s.reverse())
})

test('reverses a string with odd number of characters', function oddNumberOfChars() {
  const s = ['H', 'a', 'n', 'n', 'a', 'h']

  reverseString(s)

  expect(s).toEqual(s.reverse())
})

test('returns the same one char string', function sameOneCharString() {
  const s = ['h']

  reverseString(s)

  expect(s).toEqual(s.reverse())
})

test('returns the same empty string', function emptyString() {
  const s = ['']

  reverseString(s)

  expect(s).toEqual(s.reverse())
})
