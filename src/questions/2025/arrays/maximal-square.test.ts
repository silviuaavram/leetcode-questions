import {maximalSquare} from './maximal-square'

test('finds maximal square 1', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]

  expect(maximalSquare(matrix)).toEqual(4)
})

test('finds maximal square 2', () => {
  const matrix = [
    ['0', '1'],
    ['1', '0'],
  ]

  expect(maximalSquare(matrix)).toEqual(1)
})

test('finds maximal square 3', () => {
  const matrix = [['0']]

  expect(maximalSquare(matrix)).toEqual(0)
})

test('finds maximal square 4', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '1'],
  ]

  expect(maximalSquare(matrix)).toEqual(9)
})
