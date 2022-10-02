import {buildTree} from '..'

test('builds complete tree with values', function completeTree() {
  const values = [1, 2, 3]
  const tree = buildTree(values)

  expect(tree.val).toEqual(values[0])

  expect(tree.left.val).toEqual(values[1])
  expect(tree.right.val).toEqual(values[2])

  expect(tree.left.left).toBeNull()
  expect(tree.left.right).toBeNull()

  expect(tree.right.left).toBeNull()
  expect(tree.right.right).toBeNull()
})

test('adds null to the rest of the tree', function addNullsAtTheEnd() {
  const tree = buildTree([1, 2])

  expect(tree.right).toBeNull()
})

test('returns empty node', function emptyNode() {
  const tree = buildTree([])

  expect(tree).toBeNull()
})

test('returns node with only a value', function emptyNode() {
  const values = [1]
  const tree = buildTree(values)

  expect(tree.val).toBe(values[0])
  expect(tree.left).toBeNull()
  expect(tree.right).toBeNull()
})

test('manually adds nulls when specified', function nullNodes() {
  const values = [1, null, 2, 3]
  const tree = buildTree(values)

  expect(tree.left).toBeNull()
  expect(tree.right.val).toEqual(values[2])

  expect(tree.right.left.val).toEqual(values[3])
  expect(tree.right.right).toBeNull()
})
