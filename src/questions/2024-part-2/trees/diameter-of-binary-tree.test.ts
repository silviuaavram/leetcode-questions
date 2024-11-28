import {buildTree} from '@utils'
import {diameterOfBinaryTree} from './diameter-of-binary-tree'

test('returns the diameter of a binary tree 1', () => {
  const root = buildTree([1, 2, 3, 4, 5])

  expect(diameterOfBinaryTree(root)).toEqual(3)
})

test('returns the diameter of a binary tree 2', () => {
  const root = buildTree([1, 2])

  expect(diameterOfBinaryTree(root)).toEqual(1)
})

test('returns the diameter of a binary tree 3', () => {
  const root = buildTree([1, 2, null, 3, 4, 5, null, 6, null])

  expect(diameterOfBinaryTree(root)).toEqual(4)
})
