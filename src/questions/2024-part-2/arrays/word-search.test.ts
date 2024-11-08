import {exist} from './word-search'

test('checks if a word exists 1', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCCED'

  expect(exist(board, word)).toEqual(true)
})

test('checks if a word exists 2', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'SEE'

  expect(exist(board, word)).toEqual(true)
})

test('checks if a word exists 3', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCB'

  expect(exist(board, word)).toEqual(false)
})

test('checks if a word exists 4', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'CEDFBA'

  expect(exist(board, word)).toEqual(true)
})

test('checks if a word exists 5', () => {
  const board = [
    ['a', 'b'],
    ['c', 'd'],
  ]
  const word = 'bacd'

  expect(exist(board, word)).toEqual(true)
})
test('checks if a word exists 6', () => {
  const board = [
    ['a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a'],
  ]
  const word = 'aaaaaaaaaaaaa'

  expect(exist(board, word)).toEqual(false)
})

test('checks if a word exists 7', () => {
  const board = [
    ['A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A'],
  ]
  const word = 'AAAAAAAAAAAAAAB'

  expect(exist(board, word)).toEqual(false)
})

test('checks if a word exists 8', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'E', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCESEEEFS'

  expect(exist(board, word)).toEqual(true)
})

test('checks if a word exists 9', () => {
  const board = [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ]
  const word = 'AAB'

  expect(exist(board, word)).toEqual(true)
})
