import {buildTree} from '@utils'
import {rangeSumBST} from '../range-sum-of-bst'

test('calculates the sum of a bst 1', () => {
  const tree = buildTree([10, 5, 15, 3, 7, null, 18])

  expect(rangeSumBST(tree, 7, 15)).toEqual(32)
})

test('calculates the sum of a bst 2', () => {
  const tree = buildTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6])

  expect(rangeSumBST(tree, 6, 10)).toEqual(23)
})

test('calculates the sum of a bst 3', () => {
  const tree = buildTree([])

  expect(rangeSumBST(tree, 6, 10)).toEqual(0)
})

test('calculates the sum of a bst 4', () => {
  const tree = buildTree([3, 2, 4])

  expect(rangeSumBST(tree, 6, 10)).toEqual(0)
})
