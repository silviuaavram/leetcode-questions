import {buildTree} from '@utils'
import {isCompleteTree} from './check-completeness-of-a-binary-tree'

test('checks completeness of binary tree 1', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6])

  expect(isCompleteTree(root)).toEqual(true)
})

test('checks completeness of binary tree 2', () => {
  const root = buildTree([1, 2, 3, 4, 5, null, 7])

  expect(isCompleteTree(root)).toEqual(false)
})

test('checks completeness of binary tree 2', () => {
  const root = buildTree([1, null, 3, 4, 5, 6, 7])

  expect(isCompleteTree(root)).toEqual(false)
})
