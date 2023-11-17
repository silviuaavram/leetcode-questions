import {minAddToMakeValid} from '../minimum-add-to-make-parentheses-valid'

test('adds parantheses to make the string valid 1', () => {
  expect(minAddToMakeValid('())')).toEqual(1)
})

test('adds parantheses to make the string valid 2', () => {
  expect(minAddToMakeValid('(((')).toEqual(3)
})

test('adds parantheses to make the string valid 3', () => {
  expect(minAddToMakeValid('))((')).toEqual(4)
})

test('adds parantheses to make the string valid 4', () => {
  expect(minAddToMakeValid('()(()())')).toEqual(0)
})
