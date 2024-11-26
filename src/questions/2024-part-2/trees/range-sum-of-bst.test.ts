import {buildTree} from '@utils'
import {rangeSumBST} from './range-sum-of-bst'

test('returns the sum of range in bst 1', () => {
  const root = buildTree([10, 5, 15, 3, 7, null, 18])
  const low = 7
  const high = 15

  expect(rangeSumBST(root, low, high)).toEqual(32)
})

test('returns the sum of range in bst 1', () => {
  const root = buildTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6])
  const low = 6
  const high = 10

  expect(rangeSumBST(root, low, high)).toEqual(23)
})
