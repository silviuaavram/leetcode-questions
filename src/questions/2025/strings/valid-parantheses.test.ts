import {isValid} from './valid-parantheses'

test('checks if the parentheses are valid', () => {
  const s = '()'
  const result = isValid(s)
  expect(result).toBe(true)
})

test('checks if the parentheses are invalid', () => {
  const s = '(('
  const result = isValid(s)
  expect(result).toBe(false)
})

test('checks if the mixed parentheses are valid', () => {
  const s = '()[]{}'
  const result = isValid(s)
  expect(result).toBe(true)
})

test('checks if the mixed parentheses are invalid', () => {
  const s = '(]'
  const result = isValid(s)
  expect(result).toBe(false)
})

test('checks if the nested parentheses are valid', () => {
  const s = '{[()]}'
  const result = isValid(s)
  expect(result).toBe(true)
})

test('checks if the nested parentheses are invalid', () => {
  const s = '{[(])}'
  const result = isValid(s)
  expect(result).toBe(false)
})

test('checks if the single opening parenthesis is invalid', () => {
  const s = '('
  const result = isValid(s)
  expect(result).toBe(false)
})

test('checks if the single closing parenthesis is invalid', () => {
  const s = ')'
  const result = isValid(s)
  expect(result).toBe(false)
})

test('checks if the empty string is valid', () => {
  const s = ''
  const result = isValid(s)
  expect(result).toBe(true)
})

test('checks if the mixed parentheses are invalid', () => {
  const s = '([)]'
  const result = isValid(s)
  expect(result).toBe(false)
})

test('checks invalid characters', () => {
  const s = 'abc'
  
  expect(() => isValid(s)).toThrowErrorMatchingInlineSnapshot(`"unexpected token"`)
})
