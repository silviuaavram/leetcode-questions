import {buildTree} from '@utils'
import {BSTIterator} from '../binary-search-tree-iterator'

test('iterator works as expected 1', () => {
  const bSTIterator = new BSTIterator(buildTree([7, 3, 15, null, null, 9, 20]))

  expect(bSTIterator.next()).toEqual(3)
  expect(bSTIterator.next()).toEqual(7)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(9)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(15)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(20)
  expect(bSTIterator.hasNext()).toEqual(false)
})

test('iterator works as expected 2', () => {
  const bSTIterator = new BSTIterator(buildTree([1, 2, 3, 4, null, null, 5]))

  expect(bSTIterator.next()).toEqual(4)
  expect(bSTIterator.next()).toEqual(2)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(1)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(3)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(5)
  expect(bSTIterator.hasNext()).toEqual(false)
})

test('iterator works as expected 2', () => {
  const bSTIterator = new BSTIterator(buildTree([1, 2, null, 3, null, 5]))

  expect(bSTIterator.next()).toEqual(5)
  expect(bSTIterator.next()).toEqual(3)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(2)
  expect(bSTIterator.hasNext()).toEqual(true)
  expect(bSTIterator.next()).toEqual(1)
  expect(bSTIterator.hasNext()).toEqual(false)
})
