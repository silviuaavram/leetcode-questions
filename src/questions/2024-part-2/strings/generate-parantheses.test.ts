import {generateParenthesis} from './generate-parantheses'

test('generates parantheses 1', () => {
  const n = 3

  expect(generateParenthesis(n)).toEqual(
    expect.arrayContaining(['((()))', '(()())', '(())()', '()(())', '()()()']),
  )
})

test('generates parantheses 2', () => {
  const n = 1

  expect(generateParenthesis(n)).toEqual(expect.arrayContaining(['()']))
})

test('generates parantheses 3', () => {
  const n = 2

  expect(generateParenthesis(n)).toEqual(expect.arrayContaining(['()()', '(())']))
})



