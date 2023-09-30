import {buildTree} from '@utils'
import {isValidBST} from '../ValidateBinarySearchTree'

test('empty tree is BST', function emptyIsBST() {
  const tree = buildTree([])
  const isBST = isValidBST(tree)

  expect(isBST).toBe(true)
})

test('is a BST', function validBST() {
  const tree = buildTree([2, 1, 3])
  const isBST = isValidBST(tree)

  expect(isBST).toBe(true)
})

test('is not a BST', function validBST() {
  const tree = buildTree([5, 1, 4, null, null, 3, 6])
  const isBST = isValidBST(tree)

  expect(isBST).toBe(false)
})

test('is not a BST if node values are equal', function validBST() {
  const tree = buildTree([2, 2, 2])
  const isBST = isValidBST(tree)

  expect(isBST).toBe(false)
})
