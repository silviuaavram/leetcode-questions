import {minimumKeypresses} from './minimum-number-of-keypresses'

test('minumum number of key presses 1', () => {
  const s = "apple"

  expect(minimumKeypresses(s)).toEqual(5)
})

test('minumum number of key presses 2', () => {
  const s = "abcdefghijkl"

  expect(minimumKeypresses(s)).toEqual(15)
})

test('minumum number of key presses 3', () => {
  const s = "x"

  expect(minimumKeypresses(s)).toEqual(1)
})

test('minumum number of key presses 4', () => {
  const s = "abcdefghia"

  expect(minimumKeypresses(s)).toEqual(10)
})

test('minumum number of key presses 5', () => {
  const s = "abcdefghijklmnopqrrr"

  expect(minimumKeypresses(s)).toEqual(29)
})

