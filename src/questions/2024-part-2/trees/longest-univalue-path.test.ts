import {buildTree} from '@utils'
import {longestUnivaluePath} from './longest-univalue-path'

test('finds longest path 1', () => {
  const root = buildTree([5, 4, 5, 1, 1, null, 5])

  expect(longestUnivaluePath(root)).toEqual(2)
})

test('finds longest path 2', () => {
  const root = buildTree([1, 4, 5, 4, 4, null, 5])

  expect(longestUnivaluePath(root)).toEqual(2)
})

test('finds longest path 3', () => {
  const root = buildTree([1, 4, 5, 4, 4, null, 5, null, null, 4, 4])

  expect(longestUnivaluePath(root)).toEqual(3)
})

test('finds longest path 4', () => {
  const root = buildTree([1, null, 1, 1, 1, 1, 1, 1])

  expect(longestUnivaluePath(root)).toEqual(4)
})

test('finds longest path 5', () => {
  const root = buildTree([
    5,
    4,
    5,
    4,
    4,
    5,
    3,
    4,
    4,
    null,
    null,
    null,
    4,
    null,
    null,
    4,
    null,
    null,
    4,
    null,
    4,
    4,
    null,
    null,
    4,
    4,
  ])

  expect(longestUnivaluePath(root)).toEqual(6)
})
