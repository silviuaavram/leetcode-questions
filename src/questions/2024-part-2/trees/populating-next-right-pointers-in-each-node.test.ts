import {buildTree} from '@utils'
import {_Node, connect} from './populating-next-right-pointers-in-each-node'

test('connects the binary tree 1', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7])
  const result = connect(root as _Node)

  expect(result.next).toEqual(null)

  expect(result.left.next).toEqual(result.right)
  expect(result.right.next).toEqual(null)

  expect(result.left.left.next).toEqual(result.left.right)
  expect(result.left.right.next).toEqual(result.right.left)
  expect(result.right.left.next).toEqual(result.right.right)
  expect(result.right.right.next).toEqual(null)
})

test('connects the binary tree 2', () => {
  expect(connect(null)).toBeNull()
})
