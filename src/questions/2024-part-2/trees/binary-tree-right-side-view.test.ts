import {buildTree} from '@utils'
import {rightSideView} from './binary-tree-right-side-view'

test('returns the right side view of binary tree 1', () => {
  const root = buildTree([1, 2, 3, null, 5, null, 4])

  expect(rightSideView(root)).toEqual([1, 3, 4])
})

test('returns the right side view of binary tree 2', () => {
  const root = buildTree([1, 2, 3, 4, null, null, null, 5])

  expect(rightSideView(root)).toEqual([1, 3, 4, 5])
})

test('returns the right side view of binary tree 3', () => {
  const root = buildTree([1, null, 3])

  expect(rightSideView(root)).toEqual([1, 3])
})

test('returns the right side view of binary tree 4', () => {
  const root = buildTree([])

  expect(rightSideView(root)).toEqual([])
})

test('returns the right side view of binary tree 5', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7])

  expect(rightSideView(root)).toEqual([1, 3, 7])
})
