import {isAlienSorted} from '../verifying-an-alien-dictionary'

test('checks if alien sorted 1', () => {
  const words = ['hello', 'leetcode']
  const order = 'hlabcdefgijkmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toBe(true)
})
test('checks if alien sorted 2', () => {
  const words = ['word', 'world', 'row']
  const order = 'worldabcefghijkmnpqstuvxyz'

  expect(isAlienSorted(words, order)).toBe(false)
})

test('checks if alien sorted 3', () => {
  const words = ['apple', 'app']
  const order = 'abcdefghijklmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toBe(false)
})

test('checks if alien sorted 4', () => {
  const words = ['apple']
  const order = 'abcdefghijklmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toBe(true)
})

test('checks if alien sorted 5', () => {
  const words = ['apple']
  const order = 'abcdefghijklmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toBe(true)
})

test('checks if alien sorted 6', () => {
  const words = ['kuvp', 'q']
  const order = 'ngxlkthsjuoqcpavbfdermiywz'

  expect(isAlienSorted(words, order)).toBe(true)
})
