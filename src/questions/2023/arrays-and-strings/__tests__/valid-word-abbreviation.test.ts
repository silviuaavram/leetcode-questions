import {validWordAbbreviation} from '../valid-word-abbreviation'

test('valid word abbreviotion with 2 substitutions', () => {
  const word = 'internationalization'
  const abbr = 'i12iz4n'

  expect(validWordAbbreviation(word, abbr)).toEqual(true)
})

test('invalid word abbreviotion with 1 substitutions', () => {
  const word = 'apple'
  const abbr = 'a2e'

  expect(validWordAbbreviation(word, abbr)).toEqual(false)
})

test('valid word abbreviation without substitutions', () => {
  const word = 'hellp'
  const abbr = 'hellp'

  expect(validWordAbbreviation(word, abbr)).toEqual(true)
})

test('valid word abbreviation with only substitution', () => {
  const word = 'hellp'
  const abbr = '5'

  expect(validWordAbbreviation(word, abbr)).toEqual(true)
})

test('valid word abbreviation with multiple substitutions', () => {
  const word = 'substitution'
  const abbr = 'sub4u4'

  expect(validWordAbbreviation(word, abbr)).toEqual(true)
})

test('valid word abbreviation with empty strings', () => {
  const word = ''
  const abbr = ''

  expect(validWordAbbreviation(word, abbr)).toEqual(true)
})

test('invalid word abbreviation with empty string and abbreviation', () => {
  const word = ''
  const abbr = '22'

  expect(validWordAbbreviation(word, abbr)).toEqual(false)
})

test('invalid word abbreviation with empty abbreviation and no empty string', () => {
  const word = 'alex'
  const abbr = ''

  expect(validWordAbbreviation(word, abbr)).toEqual(false)
})

test('invalid word abbreviation with smaller abbreviation and no empty string', () => {
  const word = 'alex'
  const abbr = '3'

  expect(validWordAbbreviation(word, abbr)).toEqual(false)
})

test('invalid word abbreviation with a 0 in abbreviation', () => {
  const word = 'substitution'
  const abbr = 's0ubstitution'

  expect(validWordAbbreviation(word, abbr)).toEqual(false)
})

test('invalid word abbreviation with a leading 0 in abbreviation', () => {
  const word = 'substitution'
  const abbr = 's010ubstitution'

  expect(validWordAbbreviation(word, abbr)).toEqual(false)
})
