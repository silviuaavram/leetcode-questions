import {myAtoi} from './string-to-integer-atoi'

test('converts a string to number 1', () => {
  const s = '42'

  expect(myAtoi(s)).toEqual(42)
})

test('converts a string to number 2', () => {
  const s = ' -042'

  expect(myAtoi(s)).toEqual(-42)
})

test('converts a string to number 3', () => {
  const s = '1337c0d3'

  expect(myAtoi(s)).toEqual(1337)
})

test('converts a string to number 4', () => {
  const s = '0-1'

  expect(myAtoi(s)).toEqual(0)
})

test('converts a string to number 5', () => {
  const s = 'words and 987'

  expect(myAtoi(s)).toEqual(0)
})

test('converts a string to number 6', () => {
  const s = '-91283472332'

  expect(myAtoi(s)).toEqual(-2147483648)
})

test('converts a string to number 7', () => {
  const s = '+-12'

  expect(myAtoi(s)).toEqual(0)
})

test('converts a string to number 7', () => {
  const s = '21474836460'

  expect(myAtoi(s)).toEqual(2147483647)
})

test('converts a string to number 8', () => {
  const s = '-0012c'

  expect(myAtoi(s)).toEqual(-12)
})

test('converts a string to number 9', () => {
  const s = '2147483648'

  expect(myAtoi(s)).toEqual(2147483647)
})

test('converts a string to number 9', () => {
  const s = '    -88827   5655  U'

  expect(myAtoi(s)).toEqual(-88827)
})

test('converts a string to number 10', () => {
  const s = '-5-'

  expect(myAtoi(s)).toEqual(-5)
})

test('converts a string to number 11', () => {
  const s = "  +  413"

  expect(myAtoi(s)).toEqual(0)
})
