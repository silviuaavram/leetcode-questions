import {buildTree} from '@utils'
import {treeQueries} from '../height-of-binary-tree-after-subtree-removal-queries'

test('gets the height of a binary tree after removal queries 1', () => {
  const root = buildTree([
    1,
    3,
    4,
    2,
    null,
    6,
    5,
    null,
    null,
    null,
    null,
    null,
    7,
  ])
  const queries = [4]

  expect(treeQueries(root, queries)).toEqual([2])
})

test('gets the height of a binary tree after removal queries 2', () => {
  const root = buildTree([5, 8, 9, 2, 1, 3, 7, 4, 6])
  const queries = [3, 2, 4, 8]

  expect(treeQueries(root, queries)).toEqual([3, 2, 3, 2])
})

test('gets the height of a binary tree after removal queries 3', () => {
  const root = buildTree([1, null, 5, 3, null, 2, 4])
  const queries = [3, 5, 4, 2, 4]

  expect(treeQueries(root, queries)).toEqual([1, 0, 3, 3, 3])
})
