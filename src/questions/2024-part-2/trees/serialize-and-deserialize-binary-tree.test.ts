import {buildTree} from '@utils'
import {deserialize, serialize} from './serialize-and-deserialize-binary-tree'

test('serializez and deserializez a binary tree 1', () => {
  const tree = buildTree([1, 2, 3, null, null, 4, 5])
  const newTree = deserialize(serialize(tree))

  expect(newTree.val).toEqual(1)
  expect(newTree.left.val).toEqual(2)
  expect(newTree.right.val).toEqual(3)
  expect(newTree.left.left).toBeNull()
  expect(newTree.left.right).toBeNull()
  expect(newTree.right.left.val).toEqual(4)
  expect(newTree.right.right.val).toEqual(5)
  expect(newTree.right.right.left).toBeNull()
  expect(newTree.right.right.right).toBeNull()
  expect(newTree.right.left.left).toBeNull()
  expect(newTree.right.left.right).toBeNull()
})

test('serializez and deserializez a binary tree 2', () => {
  const tree = buildTree([])
  const newTree = deserialize(serialize(tree))

  expect(newTree).toBeNull()
})
