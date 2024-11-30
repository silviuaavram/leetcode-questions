import {buildTree} from '@utils'
import {treeToDoublyList} from './convert-binary-search-tree-to-sorted-doubly-linked-list'

test('converts tree to doubly linked list 1', () => {
  const root = buildTree([4, 2, 5, 1, 3])
  const result = treeToDoublyList(root)

  expect(result.val).toEqual(1)

  expect(result.left.val).toEqual(5)
  expect(result.right.val).toEqual(2)

  expect(result.right.left.val).toEqual(1)
  expect(result.right.right.val).toEqual(3)

  expect(result.right.right.left.val).toEqual(2)
  expect(result.right.right.right.val).toEqual(4)

  expect(result.right.right.right.left.val).toEqual(3)
  expect(result.right.right.right.right.val).toEqual(5)

  expect(result.left.left.val).toEqual(4)
  expect(result.left.right.val).toEqual(1)

  expect(result.left.left.left.val).toEqual(3)
  expect(result.left.left.right.val).toEqual(5)

  expect(result.left.left.left.left.val).toEqual(2)
  expect(result.left.left.left.right.val).toEqual(4)
})

test('converts tree to doubly linked list 2', () => {
  const root = buildTree([2, 1, 3])
  const result = treeToDoublyList(root)

  expect(result.val).toEqual(1)

  expect(result.left.val).toEqual(3)
  expect(result.right.val).toEqual(2)

  expect(result.left.left.val).toEqual(2)
  expect(result.left.right.val).toEqual(1)

  expect(result.right.left.val).toEqual(1)
  expect(result.right.right.val).toEqual(3)
})

test('converts tree to doubly linked list 3', () => {
  const root = buildTree([1])
  const result = treeToDoublyList(root)

  expect(result.val).toEqual(1)

  expect(result.left.val).toEqual(1)
  expect(result.right.val).toEqual(1)
})
