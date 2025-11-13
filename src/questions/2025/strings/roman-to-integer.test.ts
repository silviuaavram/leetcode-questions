import { romanToInt } from "./roman-to-integer";

test('converts roman to integer 1', () => {
  const s = "III"

  expect(romanToInt(s)).toEqual(3)
})

test('converts roman to integer 2', () => {
  const s = "LVIII"

  expect(romanToInt(s)).toEqual(58)
})

test('converts roman to integer 3', () => {
  const s = "MCMXCIV"

  expect(romanToInt(s)).toEqual(1994)
})

test('converts roman to integer 4', () => {
  const s = "MCMLXXXIII"

  expect(romanToInt(s)).toEqual(1983)
})

test('converts roman to integer 5', () => {
  const s = "DCXXI"

  expect(romanToInt(s)).toEqual(621)
})


