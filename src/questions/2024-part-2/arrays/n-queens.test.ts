import {solveNQueens} from './n-queens'

test('solves n queens 1', () => {
  const n = 4

  expect(solveNQueens(n)).toEqual([
    ['.Q..', '...Q', 'Q...', '..Q.'],
    ['..Q.', 'Q...', '...Q', '.Q..'],
  ])
})

test('solves n queens 2', () => {
  const n = 1

  expect(solveNQueens(n)).toEqual([['Q']])
})

test('solves n queens 3', () => {
  const n = 2

  expect(solveNQueens(n)).toEqual([])
})

test('solves n queens 4', () => {
  const n = 3

  expect(solveNQueens(n)).toEqual([])
})
