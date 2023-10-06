import {buildTree} from '@utils'
import {treeToDoublyList} from '../convert-binary-search-tree-to-sorted-doubly-linked-list'

test('converts bst to circular doubly linked list in place 1', () => {
  const tree = buildTree([4, 2, 5, 1, 3])

  const list = treeToDoublyList(tree)

  expect(list.val).toEqual(1)

  expect(list.left.val).toEqual(5)
  expect(list.left.left.val).toEqual(4)
  expect(list.left.left.left.val).toEqual(3)
  expect(list.left.left.left.left.val).toEqual(2)
  expect(list.left.left.left.left.left.val).toEqual(1)

  expect(list.right.val).toEqual(2)
  expect(list.right.right.val).toEqual(3)
  expect(list.right.right.right.val).toEqual(4)
  expect(list.right.right.right.right.val).toEqual(5)
  expect(list.right.right.right.right.right.val).toEqual(1)
})

test('converts bst to circular doubly linked list in place 2', () => {
  const tree = buildTree([1])

  const list = treeToDoublyList(tree)

  expect(list.val).toEqual(1)

  expect(list.left.val).toEqual(1)
  expect(list.right.val).toEqual(1)
})

test('returns null for empty trees', () => {
  const list = treeToDoublyList(null)

  expect(list).toBeNull()
})
