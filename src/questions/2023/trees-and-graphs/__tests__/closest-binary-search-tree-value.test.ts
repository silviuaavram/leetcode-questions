import {buildTree} from '@utils'
import {closestValue} from '../closest-binary-search-tree-value'

test('closes value in a bst 1', () => {
  const root = buildTree([4, 2, 5, 1, 3])
  const target = 3.714286

  expect(closestValue(root, target)).toEqual(4)
})

test('closes value in a bst 2', () => {
  const root = buildTree([4, 2, 5, 1, 3])
  const target = 2.55

  expect(closestValue(root, target)).toEqual(3)
})

test('closes value in a bst 3', () => {
  const root = buildTree([1])
  const target = 3.714286

  expect(closestValue(root, target)).toEqual(1)
})

test('closes value in a bst 4', () => {
  const root = buildTree([4, 2, 5, 1, 3])
  const target = 3.2

  expect(closestValue(root, target)).toEqual(3)
})

test('closes value in a bst 5', () => {
  const root = buildTree([4, 2, 5, 1, 3])
  const target = 3.5

  expect(closestValue(root, target)).toEqual(3)
})
