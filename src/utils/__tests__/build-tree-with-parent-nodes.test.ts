import buildTreeWithParentNodes from '../build-tree-with-parent-nodes'

test('builds complete tree with values', function completeTree() {
  const values = [1, 2, 3]
  const tree = buildTreeWithParentNodes(values)

  expect(tree.left.parent).toEqual(tree)
  expect(tree.right.parent).toEqual(tree)
})

test('manually adds nulls when specified', function nullNodes() {
  const values = [1, null, 2, 3]
  const tree = buildTreeWithParentNodes(values)

  expect(tree.right.left.parent).toEqual(tree.right)
})

test('adds parents to multiple nodes', function nullNodes() {
  const values = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
  const tree = buildTreeWithParentNodes(values)

  expect(tree.left.parent).toEqual(tree)
  expect(tree.right.parent).toEqual(tree)

  expect(tree.left.left.parent).toEqual(tree.left)
  expect(tree.left.right.parent).toEqual(tree.left)

  expect(tree.left.right.left.parent).toEqual(tree.left.right)
  expect(tree.left.right.right.parent).toEqual(tree.left.right)

  expect(tree.right.left.parent).toEqual(tree.right)
  expect(tree.right.right.parent).toEqual(tree.right)
})
