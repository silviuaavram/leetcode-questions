import {buildTree} from '@utils'
import {isSymmetric} from './symmetric-tree'

test('checks if tree is symetric 1', () => {
  const root = buildTree([1, 2, 2, 3, 4, 4, 3])

  expect(isSymmetric(root)).toEqual(true)
})

test('checks if tree is symetric 2', () => {
  const root = buildTree([1, 2, 2, null, 3, null, 3])

  expect(isSymmetric(root)).toEqual(false)
})

test('checks if tree is symetric 3', () => {
  const root = buildTree([1, 2, 2, 2, null, 2])

  expect(isSymmetric(root)).toEqual(false)
})
