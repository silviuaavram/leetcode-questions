import {buildTree} from '@utils'
import {closestValue} from './closest-binary-search-tree-value'

test('gets the closest value 1', () => {
  const root = buildTree([4, 2, 5, 1, 3])
  const target = 3.714286

  expect(closestValue(root, target)).toEqual(4)
})

test('gets the closest value 1', () => {
  const root = buildTree([1])
  const target = 4.428571

  expect(closestValue(root, target)).toEqual(1)
})

test('gets the closest value 3', () => {
  const root = buildTree([2, 1, 4])
  const target = 3

  expect(closestValue(root, target)).toEqual(2)
})

test('gets the closest value 3', () => {
  const root = buildTree([10, 4, 20])
  const target = 7

  expect(closestValue(root, target)).toEqual(4)
})
