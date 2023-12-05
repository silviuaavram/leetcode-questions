import {buildTree} from '@utils'
import {isCompleteTree} from '../check-completeness-of-a-binary-tree'

test('checks binary tree completeness 1', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6])

  expect(isCompleteTree(root)).toEqual(true)
})

test('checks binary tree completeness 2', () => {
  const root = buildTree([1, 2, 3, 4, 5, null, 7])

  expect(isCompleteTree(root)).toEqual(false)
})

test('checks binary tree completeness 3', () => {
  const root = buildTree([1, 2, 3, 4])

  expect(isCompleteTree(root)).toEqual(true)
})

test('checks binary tree completeness 4', () => {
  const root = buildTree([1, 2, 3, 4, null, null, 5])

  expect(isCompleteTree(root)).toEqual(false)
})

test('checks binary tree completeness 5', () => {
  const root = buildTree([1, 2, 3, 5, null, 7, 8])

  expect(isCompleteTree(root)).toEqual(false)
})
