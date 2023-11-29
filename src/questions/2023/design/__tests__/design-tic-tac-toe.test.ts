import {TicTacToe} from '../design-tic-tac-toe'

test('plays tic-tac-toe 1', () => {
  const game = new TicTacToe(3)

  expect(game.move(0, 0, 1)).toEqual(0)
  expect(game.move(0, 2, 2)).toEqual(0)
  expect(game.move(2, 2, 1)).toEqual(0)
  expect(game.move(1, 1, 2)).toEqual(0)
  expect(game.move(2, 0, 1)).toEqual(0)
  expect(game.move(1, 0, 2)).toEqual(0)
  expect(game.move(2, 1, 1)).toEqual(1)
})

test('plays tic-tac-toe 2', () => {
  const game = new TicTacToe(3)

  expect(game.move(0, 0, 1)).toEqual(0)
  expect(game.move(0, 2, 2)).toEqual(0)
  expect(game.move(1, 1, 1)).toEqual(0)
  expect(game.move(1, 2, 2)).toEqual(0)
  expect(game.move(2, 2, 1)).toEqual(1)
  expect(game.move(1, 0, 2)).toEqual(1)
  expect(game.move(2, 1, 1)).toEqual(1)
})

test('plays tic-tac-toe 3', () => {
  const game = new TicTacToe(2)

  expect(game.move(0, 1, 1)).toEqual(0)
  expect(game.move(1, 1, 2)).toEqual(0)
  expect(game.move(1, 0, 1)).toEqual(1)
})
