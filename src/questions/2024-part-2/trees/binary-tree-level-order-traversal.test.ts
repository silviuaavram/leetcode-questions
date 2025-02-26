import {buildTree} from '@utils'
import {levelOrder} from './binary-tree-level-order-traversal'

test('traverses tree in level order 1', () => {
  const root = buildTree([3, 9, 20, null, null, 15, 7])

  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]])
})

test('traverses tree in level order 2', () => {
  const root = buildTree([1])

  expect(levelOrder(root)).toEqual([[1]])
})

test('traverses tree in level order 3', () => {
  expect(levelOrder(null)).toEqual([ ])
})


