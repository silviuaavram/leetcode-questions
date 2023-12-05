import {buildTree} from '@utils'
import {maxLevelSum} from '../maximum-level-sum-of-a-binary-tree'

test('gets the min level with max sum 1', () => {
  const root = buildTree([1, 7, 0, 7, -8, null, null])

  expect(maxLevelSum(root)).toEqual(2)
})

test('gets the min level with max sum 2', () => {
  const root = buildTree([
    989,
    null,
    10250,
    98693,
    -89388,
    null,
    null,
    null,
    -32127,
  ])

  expect(maxLevelSum(root)).toEqual(2)
})

test('gets the min level with max sum 3', () => {
  const root = buildTree([3, 1, 2])

  expect(maxLevelSum(root)).toEqual(1)
})

test('gets the min level with max sum 4', () => {
  const root = buildTree([3, 1, 2, 1, 1, 1, 1])

  expect(maxLevelSum(root)).toEqual(3)
})
