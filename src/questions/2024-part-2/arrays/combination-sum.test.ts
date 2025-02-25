import {combinationSum} from './combination-sum'

test('combinations for sum 1', () => {
  const candidates = [2, 3, 6, 7]
  const target = 7

  expect(combinationSum(candidates, target)).toEqual([[2, 2, 3], [7]])
})

test('combinations for sum 2', () => {
  const candidates = [2, 3, 5]
  const target = 8

  expect(combinationSum(candidates, target)).toEqual([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ])
})

test('combinations for sum 3', () => {
  const candidates = [2]
  const target = 1

  expect(combinationSum(candidates, target)).toEqual([])
})

test('combinations for sum 4', () => {
  const candidates = [1, 2]
  const target = 3

  expect(combinationSum(candidates, target)).toEqual([
    [1, 1, 1],
    [1, 2],
  ])
})
