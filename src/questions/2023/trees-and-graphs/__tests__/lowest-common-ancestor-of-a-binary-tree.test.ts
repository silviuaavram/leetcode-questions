import {buildTree} from '@utils'
import {lowestCommonAncestor} from '../lowest-common-ancestor-of-a-binary-tree'

test('the common ancestor of 5 and 1 is 3', () => {
  const tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(lowestCommonAncestor(tree, tree.left, tree.right)).toEqual(tree)
})

test('the common ancestor of 5 and 4 is 5', () => {
  const tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(lowestCommonAncestor(tree, tree.left, tree.left.right.right)).toEqual(
    tree.left,
  )
})

test('the common ancestor of 1 and 2 is 1', () => {
  const tree = buildTree([1, 2])

  expect(lowestCommonAncestor(tree, tree, tree.left)).toEqual(tree)
})

test('the common ancestor of 7 and 8 is 3', () => {
  const tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(
    lowestCommonAncestor(tree, tree.left.right.left, tree.right.right),
  ).toEqual(tree)
})
