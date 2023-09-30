import {buildTree} from '@utils'
import {connect, Node} from '../PopulatingNextRightPointersInEachNode'

test('connects the nodes correctly', function connectNodes() {
  const tree = buildTree([1, 2, 3, 4, 5, 6, 7]) as Node

  connect(tree)

  expect(tree.next).toBeNull()

  expect((tree.left as Node).next).toBe(tree.right)
  expect((tree.right as Node).next).toBeNull()

  expect((tree.left.left as Node).next).toBe(tree.left.right)
  expect((tree.left.right as Node).next).toBe(tree.right.left)
  expect((tree.right.left as Node).next).toBe(tree.right.right)
  expect((tree.right.right as Node).next).toBeNull()
})

test('does not connect an empty tree', function emptyTree() {
  let failed = false

  try {
    connect(null)
  } catch (e) {
    failed = true
  }

  expect(failed).toBe(false)
})

test('does connect only one node', function rootTreeConnect() {
  const tree = buildTree([1]) as Node

  connect(tree)

  expect(tree.next).toBeNull()
})
