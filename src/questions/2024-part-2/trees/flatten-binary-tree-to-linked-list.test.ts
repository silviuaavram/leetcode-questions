import {buildTree} from '@utils'
import {flatten} from './flatten-binary-tree-to-linked-list'

test('flattens a tree to a list 1', () => {
  const root = buildTree([1, 2, 5, 3, 4, null, 6])

  flatten(root)

    expect(root).toEqual(buildTree([1,null,2,null,3,null,4,null,5,null,6]))
})

test('flattens a tree to a list 2', () => {
  const root = null

  flatten(root)

  expect(root).toBeNull()
})

test('flattens a tree to a list 3', () => {
  const root = buildTree([0])

  flatten(root)

  expect(root.val).toEqual(0)
  expect(root.left).toBeNull()
  expect(root.right).toBeNull()
})
