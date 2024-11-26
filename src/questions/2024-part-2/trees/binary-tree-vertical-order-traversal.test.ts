import {buildTree} from '@utils'
import {verticalOrder} from './binary-tree-vertical-order-traversal'

test('traverses the tree in vertical order 1', () => {
  const s = buildTree([3, 9, 20, null, null, 15, 7])

  expect(verticalOrder(s)).toEqual([[9], [3, 15], [20], [7]])
})

test('traverses the tree in vertical order 2', () => {
  const s = buildTree([3, 9, 8, 4, 0, 1, 7])

  expect(verticalOrder(s)).toEqual([[4], [9], [3, 0, 1], [8], [7]])
})

test('traverses the tree in vertical order 3', () => {
  const s = buildTree([
    1,
    2,
    3,
    4,
    10,
    9,
    11,
    null,
    5,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    6,
  ])

  expect(verticalOrder(s)).toEqual([[4], [2, 5], [1, 10, 9, 6], [3], [11]])
})
