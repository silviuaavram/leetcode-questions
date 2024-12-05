import {buildTree} from '@utils'
import {distanceK} from './all-nodes-distance-k-in-binary-tree'

test('returns the nodes at distance K 1', () => {
  const tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(distanceK(tree, tree.left, 2)).toEqual(
    expect.arrayContaining([
      tree.left.right.left.val,
      tree.left.right.right.val,
      tree.right.val,
    ]),
  )
})

test('returns the nodes at distance K 2', () => {
  const tree = buildTree([1])

  expect(distanceK(tree, tree, 3)).toEqual([])
})

test('returns the nodes at distance K 3', () => {
  const tree = buildTree([1])

  expect(distanceK(tree, tree, 0)).toEqual([tree.val])
})

test('returns the nodes at distance K 4', () => {
  const tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(distanceK(tree, tree.right.left, 4)).toEqual(
    expect.arrayContaining([
      tree.left.left.val,
      tree.left.right.val,
    ]),
  )
})
