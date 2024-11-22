import {buildTree} from '@utils'
import {maxPathSum} from './binary-tree-maximum-path-sum'

test('returns the max sum on a tree path 1', () => {
  const root = buildTree([-10, 9, 20, null, null, 15, 7])

  expect(maxPathSum(root)).toEqual(42)
})

test('returns the max sum on a tree path 2', () => {
  const root = buildTree([1, 2, 3])

  expect(maxPathSum(root)).toEqual(6)
})

test('returns the max sum on a tree path 3', () => {
  const root = buildTree([-5, -2, -1])

  expect(maxPathSum(root)).toEqual(-1)
})

test('returns the max sum on a tree path 4', () => {
  const root = buildTree([1, null, 2, -3, -4])

  expect(maxPathSum(root)).toEqual(3)
})

test('returns the max sum on a tree path 5', () => {
  const root = buildTree([-5, 1, null, -1, null])

  expect(maxPathSum(root)).toEqual(1)
})
