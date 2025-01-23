import {buildTree} from '@utils'
import {verticalTraversal} from './vertical-order-traversal-of-a-binary-tree'

test('traverses tree in vertical order 1', () => {
  const root = buildTree([3, 9, 20, null, null, 15, 7])

  expect(verticalTraversal(root)).toEqual([[9], [3, 15], [20], [7]])
})

test('traverses tree in vertical order 2', () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7])

  expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]])
})

test('traverses tree in vertical order 3', () => {
  const root = buildTree([1, 2, 3, 4, 6, 5, 7])

  expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]])
})
