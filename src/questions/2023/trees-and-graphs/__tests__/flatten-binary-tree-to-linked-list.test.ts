import {buildTree} from '@utils'
import {flatten} from '../flatten-binary-tree-to-linked-list'

test('flattens a binary tree 1', () => {
  const root = buildTree([1, 2, 5, 3, 4, null, 6])
  const expected = buildTree([1, null, 2, null, 3, null, 4, null, 5, null, 6])

  flatten(root)

  expect(root).toEqual(expected)
})

test('flattens a binary tree 2', () => {
  const root = buildTree([])
  const expected = buildTree([])

  flatten(root)

  expect(root).toEqual(expected)
})
test('flattens a binary tree 3', () => {
  const root = buildTree([1])
  const expected = buildTree([1])

  flatten(root)

  expect(root).toEqual(expected)
})

test('flattens a binary tree 4', () => {
  const root = buildTree([1, 2, null, 3, null, 4])
  const expected = buildTree([1, null, 2, null, 3, null, 4])

  flatten(root)

  expect(root).toEqual(expected)
})

test('flattens a binary tree 5', () => {
  const root = buildTree([1, 2, 3, 4, 5, 7, null, null, null, 6])
  const expected = buildTree([
    1,
    null,
    2,
    null,
    4,
    null,
    5,
    null,
    6,
    null,
    3,
    null,
    7,
  ])

  flatten(root)

  expect(root).toEqual(expected)
})

test('flattens a binary tree 6', () => {
  const root = buildTree([1, null, 2, 3])
  const expected = buildTree([1, null, 2, null, 3])

  flatten(root)

  expect(root).toEqual(expected)
})
