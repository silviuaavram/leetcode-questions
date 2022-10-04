import {isValid} from '../ValidParantheses'

test('checks the parantheses is closed', function oneParantheses() {
  const s = '()'

  expect(isValid(s)).toBe(true)
})

test('checks all parantheses are closed', function allParantheses() {
  const s = '()[]{}'

  expect(isValid(s)).toBe(true)
})

test('checks all parantheses are not closed corectly', function invalidParantheses() {
  const s = '(]'

  expect(isValid(s)).toBe(false)
})

test('checks nested parantheses are closed corectly', function correctNested() {
  const s = '{()[()[(){}()]]}'

  expect(isValid(s)).toBe(true)
})

test('checks nested parantheses are not closed corectly', function incorrectNested() {
  const s = '{{{([{[]}]}}}'

  expect(isValid(s)).toBe(false)
})

test('checks only one closed parantheses', function oneClosed() {
  const s = '}'

  expect(isValid(s)).toBe(false)
})

test('empty string is valid', function empty() {
  const s = ''

  expect(isValid(s)).toBe(true)
})

test('remaining open parantheses is invalid', function remainingOpenInvalid() {
  const s = '[[[()'

  expect(isValid(s)).toBe(false)
})
