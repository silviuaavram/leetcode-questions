import {calculate} from '../basic-calculator-ii'

test('calculates expression 1', () => {
  const s = '3+2*2'

  expect(calculate(s)).toEqual(7)
})

test('calculates expression 2', () => {
  const s = '3/2'

  expect(calculate(s)).toEqual(1)
})

test('calculates expression 3', () => {
  const s = '3+5 / 2 '

  expect(calculate(s)).toEqual(5)
})

test('calculates expression 4', () => {
  const s = '3+3*5 -  6/ 2 + 3'

  expect(calculate(s)).toEqual(18)
})

test('calculates expression 5', () => {
  const s = '11 + 12 * 10'

  expect(calculate(s)).toEqual(131)
})

test('calculates expression 6', () => {
  const s = '11 - 12 * 10 '

  expect(calculate(s)).toEqual(-109)
})

test('calculates expression 7', () => {
  const s = '1*2*3*4'

  expect(calculate(s)).toEqual(24)
})

test('calculates expression 8', () => {
  const s = '1*2*3*4-5'

  expect(calculate(s)).toEqual(19)
})

test('calculates expression 9', () => {
  const s = '1-2*3/6'

  expect(calculate(s)).toEqual(0)
})

test('calculates expression 10', () => {
  const s = '14/3*2'

  expect(calculate(s)).toEqual(8)
})

test('calculates expression 11', () => {
  const s = '14-3/2'

  expect(calculate(s)).toEqual(13)
})

test('calculates expression 12', () => {
  const s = '1/3/3/3/3/3/3/3/3/3'

  expect(calculate(s)).toEqual(0)
})
