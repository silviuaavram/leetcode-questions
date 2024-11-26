import {buildTree} from '@utils'
import {
  lowestCommonAncestor,
  _Node,
} from './lowest-common-ancestor-of-a-binary-tree-iii'

test('finds the lca 1', () => {
  const root = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) as _Node

  root.left.parent = root
  root.right.parent = root

  root.left.left.parent = root.left
  root.left.right.parent = root.left

  root.right.left.parent = root.right
  root.right.right.parent = root.right

  root.left.right.left.parent = root.left.right
  root.left.right.right.parent = root.left.right

  expect(lowestCommonAncestor(root.left as _Node, root.right as _Node)).toEqual(
    root,
  )
})

test('finds the lca 2', () => {
  const root = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) as _Node

  root.left.parent = root
  root.right.parent = root

  root.left.left.parent = root.left
  root.left.right.parent = root.left

  root.right.left.parent = root.right
  root.right.right.parent = root.right

  root.left.right.left.parent = root.left.right
  root.left.right.right.parent = root.left.right

  expect(
    lowestCommonAncestor(root.left as _Node, root.left.right.right as _Node),
  ).toEqual(root.left)
})
