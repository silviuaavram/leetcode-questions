import {platesBetweenCandles} from './plates-between-candles'

test('gets plates between candles 1', () => {
  const s = '**|**|***|'
  const queries = [
    [2, 5],
    [5, 9],
  ]

  expect(platesBetweenCandles(s, queries)).toEqual([2, 3])
})

test('gets plates between candles 2', () => {
  const s = '***|**|*****|**||**|*'
  const queries = [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ]

  expect(platesBetweenCandles(s, queries)).toEqual([9, 0, 0, 0, 0])
})

test('gets plates between candles 3', () => {
  const s = '||**||**|*'
  const queries = [[3, 8]]

  expect(platesBetweenCandles(s, queries)).toEqual([2])
})

test.only('gets plates between candles 3', () => {
  const s = "||*"
  const queries = [[2,2]]

  expect(platesBetweenCandles(s, queries)).toEqual([0])
})
