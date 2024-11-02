import {copyRandomBinaryTree} from './clone-binary-tree-with-random-pointer'

test('copies tree with random pointer 1', () => {
  const node1 = {val: 1, left: null, right: null, random: null}
  const node2 = {val: 4, left: null, right: null, random: null}
  const node3 = {val: 7, left: null, right: null, random: null}

  node1.right = node2
  node2.left = node3
  node2.random = node3
  node3.random = node1

  const root = node1
  const rootCopy = copyRandomBinaryTree(node1)

  expect(rootCopy).not.toBe(root)
  expect(rootCopy.val).toEqual(root.val)
  expect(rootCopy.right).not.toBe(root.right)
  expect(rootCopy.right.val).toEqual(root.right.val)
  expect(rootCopy.right.left).not.toBe(root.right.left)
  expect(rootCopy.right.left.val).toEqual(root.right.left.val)
  expect(rootCopy.right.random).not.toBe(root.right.random)
  expect(rootCopy.right.random.val).toEqual(root.right.random.val)
  expect(rootCopy.right.random).toBe(rootCopy.right.left)

  console.log(rootCopy)
})