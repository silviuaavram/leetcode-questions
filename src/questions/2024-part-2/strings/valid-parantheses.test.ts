import {isValid} from './valid-parantheses'

test('checks if parantheses are valid 1', () => {
  const s = '()'

  expect(isValid(s)).toEqual(true)
})

test('checks if parantheses are valid 2', () => {
  const s = '()[]{}'

  expect(isValid(s)).toEqual(true)
})
test('checks if parantheses are valid 3', () => {
  const s = '(]'

  expect(isValid(s)).toEqual(false)
})

test('checks if parantheses are valid 4', () => {
  const s = '([])'

  expect(isValid(s)).toEqual(true)
})
