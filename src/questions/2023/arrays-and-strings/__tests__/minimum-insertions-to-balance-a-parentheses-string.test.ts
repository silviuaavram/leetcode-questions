import {minInsertions} from '../minimum-insertions-to-balance-a-parentheses-string'

test('balances a parantheses string 1', () => {
  const s = '())'

  expect(minInsertions(s)).toEqual(0)
})
test('balances a parantheses string 2', () => {
  const s = '())(())))'

  expect(minInsertions(s)).toEqual(0)
})
test('balances a parantheses string 3', () => {
  const s = '(())())))'

  expect(minInsertions(s)).toEqual(0)
})

test('balances a parantheses string 4', () => {
  const s = ')()'

  expect(minInsertions(s)).toEqual(3)
})

test('balances a parantheses string 5', () => {
  const s = '()))'

  expect(minInsertions(s)).toEqual(2)
})

test('balances a parantheses string 6', () => {
  const s = '(()))'

  expect(minInsertions(s)).toEqual(1)
})

test('balances a parantheses string 7', () => {
  const s = '))())('

  expect(minInsertions(s)).toEqual(3)
})

test('balances a parantheses string 8', () => {
  const s = '()()()()()('

  expect(minInsertions(s)).toEqual(7)
})

test('balances a parantheses string 9', () => {
  const s = '))))))((()))(()(()))'

  expect(minInsertions(s)).toEqual(10)
})
