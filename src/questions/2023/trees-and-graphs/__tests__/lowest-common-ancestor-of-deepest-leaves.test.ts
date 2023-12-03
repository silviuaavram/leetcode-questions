import {buildTree} from '@utils'
import {lcaDeepestLeaves} from '../lowest-common-ancestor-of-deepest-leaves'

test('finds the lca of deepest leaves 1', () => {
  const root = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const expected = buildTree([2, 7, 4])

  expect(lcaDeepestLeaves(root)).toEqual(expected)
})

test('finds the lca of deepest leaves 2', () => {
  const root = buildTree([1])
  const expected = buildTree([1])

  expect(lcaDeepestLeaves(root)).toEqual(expected)
})

test('finds the lca of deepest leaves 3', () => {
  const root = buildTree([0, 1, 3, null, 2])
  const expected = buildTree([2])

  expect(lcaDeepestLeaves(root)).toEqual(expected)
})

test('finds the lca of deepest leaves 4', () => {
  expect(lcaDeepestLeaves(null)).toEqual(null)
})

test('finds the lca of deepest leaves 5', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7, 8, null, null, 9])
  const expected = buildTree([2, 4, 5, 8, null, null, 9])

  expect(lcaDeepestLeaves(root)).toEqual(expected)
})
