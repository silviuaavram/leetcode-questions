import {verticalOrder} from '../binary-tree-vertical-order-traversal'
import {buildTree} from '@utils'

test('returns empty array on null tree', () => {
  expect(verticalOrder(null)).toEqual([])
})

test("returns the root if it's the only node", () => {
  expect(verticalOrder(null)).toEqual([])
})

test('returns 3 columns, one for each node', () => {
  const tree = buildTree([1, 2, 3])

  expect(verticalOrder(tree)).toEqual([[2], [1], [3]])
})

test('returns 3 columns with the 4 nodes on correct columns', () => {
  const tree = buildTree([3, 9, 20, null, null, 15, 7])

  expect(verticalOrder(tree)).toEqual([[9], [3, 15], [20], [7]])
})

test('returns 5 columns with the 7 nodes on correct columns', () => {
  const tree = buildTree([3, 9, 8, 4, 0, 1, 7])

  expect(verticalOrder(tree)).toEqual([[4], [9], [3, 0, 1], [8], [7]])
})

test('returns 5 columns with the 9 nodes on correct columns', () => {
  const tree = buildTree([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5])

  expect(verticalOrder(tree)).toEqual([[4], [9, 5], [3, 0, 1], [8, 2], [7]])
})

test('returns 5 columns with one node on each', () => {
  const tree = buildTree([1, 2, null, 3, null, 4, null, 5, null])

  expect(verticalOrder(tree)).toEqual([[5], [4], [3], [2], [1]])
})

test('returns 9 columns with one node on each', () => {
  const tree = buildTree([
    1,
    2,
    3,
    4,
    null,
    null,
    5,
    6,
    null,
    null,
    7,
    8,
    null,
    null,
    9,
  ])

  expect(verticalOrder(tree)).toEqual([
    [8],
    [6],
    [4],
    [2],
    [1],
    [3],
    [5],
    [7],
    [9],
  ])
})
