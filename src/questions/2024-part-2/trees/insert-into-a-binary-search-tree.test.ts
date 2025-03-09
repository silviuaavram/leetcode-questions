import {buildTree} from '@utils'
import {insertIntoBST} from './insert-into-a-binary-search-tree'

test('inserts value in BST 1', () => {
  const root = buildTree([4, 2, 7, 1, 3])
  const val = 5

  expect(insertIntoBST(root, val)).toEqual(buildTree([4, 2, 7, 1, 3, 5]))
})

test('inserts value in BST 2', () => {
  const root = buildTree([40, 20, 60, 10, 30, 50, 70])
  const val = 25

  expect(insertIntoBST(root, val)).toEqual(
    buildTree([40, 20, 60, 10, 30, 50, 70, null, null, 25]),
  )
})

test('inserts value in BST 3', () => {
  const root = buildTree([4, 2, 7, 1, 3, null, null, null, null, null, null])
  const val = 5

  expect(insertIntoBST(root, val)).toEqual(buildTree([4, 2, 7, 1, 3, 5]))
})

test('inserts value in BST 4', () => {
  const val = 5

  expect(insertIntoBST(null, val)).toEqual(buildTree([5]))
})
