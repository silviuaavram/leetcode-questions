import {calPoints} from './baseball-game'

test('keeps record 1', () => {
  const ops = ['5', '2', 'C', 'D', '+']

  expect(calPoints(ops)).toEqual(30)
})

test('keeps record 2', () => {
  const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+']

  expect(calPoints(ops)).toEqual(27)
})

test('keeps record 3', () => {
  const ops = ['1', 'C']

  expect(calPoints(ops)).toEqual(0)
})
