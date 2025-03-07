import { isStrobogrammatic } from "./strobogrammatic-number";

test('checks if number is strobogrammatic 1', () => {
  const num = "69"

  expect(isStrobogrammatic(num)).toEqual(true)
})

test('checks if number is strobogrammatic 2', () => {
  const num = "88"

  expect(isStrobogrammatic(num)).toEqual(true)
})

test('checks if number is strobogrammatic 3', () => {
  const num = "962"

  expect(isStrobogrammatic(num)).toEqual(false)
})

test('checks if number is strobogrammatic 4', () => {
  const num = "686989"

  expect(isStrobogrammatic(num)).toEqual(true)
})

test('checks if number is strobogrammatic 5', () => {
  const num = "1192611"

  expect(isStrobogrammatic(num)).toEqual(false)
})

test('checks if number is strobogrammatic 6', () => {
  const num = "1190611"

  expect(isStrobogrammatic(num)).toEqual(true)
})

test('checks if number is strobogrammatic 7', () => {
  const num = "96"

  expect(isStrobogrammatic(num)).toEqual(true)
})

