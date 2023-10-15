import {buildTree} from '@utils'
import {verticalTraversal} from '../vertical-order-traversal-of-a-binary-tree'

test('return a vertical traversal of a binary tree 1', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7])

  expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]])
})

test('return a vertical traversal of a binary tree 2', () => {
  const root = buildTree([3, 9, 20, null, null, 15, 7])

  expect(verticalTraversal(root)).toEqual([[9], [3, 15], [20], [7]])
})

test('return a vertical traversal of a binary tree 3', () => {
  const root = buildTree([1, 2, 3, 4, 6, 5, 7])

  expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]])
})

test('return a vertical traversal of a binary tree 4', () => {
  const root = buildTree([
    0,
    2,
    1,
    3,
    null,
    5,
    22,
    9,
    4,
    12,
    25,
    null,
    null,
    13,
    14,
    8,
    6,
    null,
    null,
    null,
    null,
    null,
    27,
    24,
    26,
    null,
    17,
    7,
    null,
    28,
    null,
    null,
    null,
    null,
    null,
    19,
    null,
    11,
    10,
    null,
    null,
    null,
    23,
    16,
    15,
    20,
    18,
    null,
    null,
    null,
    null,
    null,
    21,
    null,
    null,
    29,
  ])

  expect(verticalTraversal(root)).toEqual([
    [13, 28],
    [9, 24, 27, 16],
    [3, 8, 14, 11, 19],
    [2, 4, 12, 7, 17, 26, 15, 20, 23],
    [0, 5, 6, 10, 21, 29],
    [1, 25, 18],
    [22],
  ])
})
