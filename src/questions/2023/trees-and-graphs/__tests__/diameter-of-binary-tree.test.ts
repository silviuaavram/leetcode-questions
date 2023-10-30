import {buildTree} from '@utils'
import {diameterOfBinaryTree} from '../diameter-of-binary-tree'

test('diameter of a tree 1', () => {
  const root = buildTree([1, 2, 3, 4, 5])

  expect(diameterOfBinaryTree(root)).toEqual(3)
})

test('diameter of a tree 2', () => {
  const root = buildTree([1, 2])

  expect(diameterOfBinaryTree(root)).toEqual(1)
})

test('diameter of a tree 3', () => {
  const root = buildTree([1])

  expect(diameterOfBinaryTree(root)).toEqual(0)
})

test('diameter of a tree 4', () => {
  const root = buildTree([1, 2, null, 3, 4, 5, null, null, 6])

  expect(diameterOfBinaryTree(root)).toEqual(4)
})
