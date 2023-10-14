import {buildTree} from '@utils'
import {rightSideView} from '../binary-tree-right-side-view'

test('returns the right side view 1', () => {
  const tree = buildTree([1, 2, 3, null, 5, null, 4])

  expect(rightSideView(tree)).toEqual([1, 3, 4])
})

test('returns the right side view 2', () => {
  const tree = buildTree([1, null, 3])

  expect(rightSideView(tree)).toEqual([1, 3])
})

test('returns the right side view 3', () => {
  const tree = buildTree([])

  expect(rightSideView(tree)).toEqual([])
})

test('returns the right side view 4', () => {
  const tree = buildTree([1, 2, null, 3, null, 4, 5])

  expect(rightSideView(tree)).toEqual([1, 2, 3, 5])
})
