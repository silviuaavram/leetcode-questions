import {buildTree} from '../../../utils'
import {lowestCommonAncestor} from '../LowestCommomAncestorOfABinarySearchTree'

test('common between 2 and 8 is 6', function commonOf2And8Is6() {
  const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  const p = root.left
  const q = root.right

  expect(lowestCommonAncestor(root, p, q)).toBe(root)
})

test('common between 2 and 4 is 2', function commonOf2And4Is2() {
  const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  const p = root.left
  const q = root.left.right

  expect(lowestCommonAncestor(root, p, q)).toBe(root.left)
})

test('common between 0 and 5 is 2', function commonOf0And5Is2() {
  const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  const p = root.left.left
  const q = root.left.right.right

  expect(lowestCommonAncestor(root, p, q)).toBe(root.left)
})
