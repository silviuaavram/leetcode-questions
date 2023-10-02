import {buildTreeWithParentNodes} from '@utils'
import {lowestCommonAncestor} from '../lowest-common-ancestor-of-a-binary-tree-iii'

test('the common ancestor of 5 and 1 is 3', () => {
  const tree = buildTreeWithParentNodes([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(lowestCommonAncestor(tree.left, tree.right)).toEqual(tree)
})

test('the common ancestor of 5 and 4 is 5', () => {
  const tree = buildTreeWithParentNodes([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(lowestCommonAncestor(tree.left, tree.left.right.right)).toEqual(
    tree.left,
  )
})

test('the common ancestor of 1 and 2 is 1', () => {
  const tree = buildTreeWithParentNodes([1, 2])

  expect(lowestCommonAncestor(tree, tree.left)).toEqual(tree)
})
