import {buildTree} from '../../../utils'
import {inorderTraversal} from '../BinaryTreeInorderTraversal'

test('traverses in order a 3 node tree', function traverse3NodeTree() {
  const tree = buildTree([1, null, 2, 3])

  expect(inorderTraversal(tree)).toEqual([1, 3, 2])
})

test('returns empty for empty tree', function emptyTree() {
  const tree = buildTree([])

  expect(inorderTraversal(tree)).toEqual([])
})

test('traverses in order a 1 node tree', function traverse1NodeTree() {
  const tree = buildTree([1])

  expect(inorderTraversal(tree)).toEqual([1])
})

test('traverses in order a 7 node tree', function traverse7NodeTree() {
  const tree = buildTree([1, 2, 3, 4, 5, 6, 7])

  expect(inorderTraversal(tree)).toEqual([4, 2, 5, 1, 6, 3, 7])
})
