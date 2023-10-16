import {buildTree} from '@utils'
import {sumNumbers} from '../sum-root-to-leaf-numbers'

test('sums the leaf nodes 1', () => {
  const root = buildTree([1, 2, 3])

  expect(sumNumbers(root)).toEqual(25)
})

test('sums the leaf nodes 2', () => {
  const root = buildTree([4, 9, 0, 5, 1])

  expect(sumNumbers(root)).toEqual(1026)
})
