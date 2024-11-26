import {calculate} from './basic-calculator-ii'

test('calculates 1', () => {
  const s = '3+2*2'

  expect(calculate(s)).toEqual(7)
})

test('calculates 2', () => {
  const s = '3/2'

  expect(calculate(s)).toEqual(1)
})

test('calculates 3', () => {
  const s = ' 3+5 / 2 '

  expect(calculate(s)).toEqual(5)
})

test('calculates 4', () => {
  const s = '1 * 2 * 3 + 4 - 5 *3'

  expect(calculate(s)).toEqual(-5)
})

test('calculates 5', () => {
  const s = '5*5*5+5/5'

  expect(calculate(s)).toEqual(126)
})

test('calculates 6', () => {
  const s = '0'

  expect(calculate(s)).toEqual(0)
})

test('calculates 6', () => {
  const s = ''

  expect(calculate(s)).toEqual(0)
})

test('calculates 7', () => {
  const s = '14-3/2'

  expect(calculate(s)).toEqual(13)
})
