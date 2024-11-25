import {validWordAbbreviation} from './valid-word-abbreviation'

test('checks if an abbreviation is valid 1', () => {
  const word = 'internationalization'
  const abbr = 'i12iz4n'

  expect(validWordAbbreviation(word, abbr)).toBe(true)
})

test('checks if an abbreviation is valid 2', () => {
  const word = 'apple'
  const abbr = 'a2e'

  expect(validWordAbbreviation(word, abbr)).toBe(false)
})

test.each([
  ['s10n', true],
  ['sub4u4', true],
  ['12', true],
  ['su3i1u2on', true],
  ['substitution', true],
  ['s55n', false],
  ['s010n', false],
  ['s0ubstitution', false],
])('checks if an abbreviation is valid 3', (abbr, expected) => {
  const word = 'substitution'

  expect(validWordAbbreviation(word, abbr)).toBe(expected)
})

test('checks if an abbreviation is valid 4', () => {
  const word = 'apple'
  const abbr = 'a3e3'

  expect(validWordAbbreviation(word, abbr)).toBe(false)
})