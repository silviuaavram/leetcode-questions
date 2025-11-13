import { reverse } from "./reverse-integer";

test('reverses number 1', () => {
  const x = 123

  expect(reverse(x)).toEqual(321)
})

test('reverses number 2', () => {
  const x = -123

  expect(reverse(x)).toEqual(-321)
})

test('reverses number 3', () => {
  const x = 120

  expect(reverse(x)).toEqual(21)
})

test('reverses number 4', () => {
  const x = -2147483648

  expect(reverse(x)).toEqual(0)
})

