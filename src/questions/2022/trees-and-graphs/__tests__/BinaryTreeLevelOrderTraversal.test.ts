import {buildTree} from '@utils'
import {levelOrder} from '../BinaryTreeLevelOrderTraversal'

test('traverses by level a 5 node tree', function traverse3NodeTree() {
  const tree = buildTree([3, 9, 20, null, null, 15, 7])

  expect(levelOrder(tree)).toEqual([[3], [9, 20], [15, 7]])
})

test('returns empty for empty tree', function emptyTree() {
  const tree = buildTree([])

  expect(levelOrder(tree)).toEqual([])
})

test('traverses by level a 1 node tree', function traverse1NodeTree() {
  const tree = buildTree([1])

  expect(levelOrder(tree)).toEqual([[1]])
})

test('traverses in order a 7 node tree', function traverse7NodeTree() {
  const tree = buildTree([1, 2, 3, 4, 5, 6, 7])

  expect(levelOrder(tree)).toEqual([[1], [2, 3], [4, 5, 6, 7]])
})
