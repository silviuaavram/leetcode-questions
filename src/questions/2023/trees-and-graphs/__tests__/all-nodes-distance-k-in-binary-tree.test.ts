import {buildTree} from '@utils'
import {distanceK} from '../all-nodes-distance-k-in-binary-tree'

test('gets the closest nodes of distance k 1', () => {
  const root = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])

  expect(distanceK(root, root.left, 2)).toEqual([7, 4, 1])
})

test('gets the closest nodes of distance k 2', () => {
  const root = buildTree([1])

  expect(distanceK(root, root.left, 1)).toEqual([])
})

test('gets the closest nodes of distance k 3', () => {
  const root = buildTree([0, 2, 1, null, null, 3])

  expect(distanceK(root, root.right.left, 3)).toEqual([2])
})
