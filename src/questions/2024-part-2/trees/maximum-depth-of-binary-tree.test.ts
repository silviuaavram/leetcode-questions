import {buildTree} from '@utils'
import {maxDepth} from './maximum-depth-of-binary-tree'

test('gets the max depth of binary tree 1', () => {
  const root = buildTree([3, 9, 20, null, null, 15, 7])

  expect(maxDepth(root)).toEqual(3)
})

test('gets the max depth of binary tree 2', () => {
  const root = buildTree([1, null, 2])

  expect(maxDepth(root)).toEqual(2)
})

test('gets the max depth of binary tree 3', () => {
  expect(maxDepth(null)).toEqual(0)
})

test('gets the max depth of binary tree 4', () => {
  expect(maxDepth(buildTree([1]))).toEqual(1)
})
