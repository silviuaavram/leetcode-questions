import {combinationSum2} from './combination-sum-ii'

test('gets combinations that sum up to target 1', () => {
  const candidates = [10, 1, 2, 7, 6, 1, 5]
  const target = 8

  expect(combinationSum2(candidates, target)).toEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ])
})

test('gets combinations that sum up to target 2', () => {
  const candidates = [2, 5, 2, 1, 2]
  const target = 5

  expect(combinationSum2(candidates, target)).toEqual([[1, 2, 2], [5]])
})

test('gets combinations that sum up to target 2', () => {
  const candidates = [3, 1, 3, 5, 1, 1]
  const target = 8

  expect(combinationSum2(candidates, target)).toEqual([
    [1, 1, 1, 5],
    [1, 1, 3, 3],
    [3, 5],
  ])
})
