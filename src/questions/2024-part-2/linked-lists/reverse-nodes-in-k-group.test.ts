import {buildList} from '@utils'
import {reverseKGroup} from './reverse-nodes-in-k-group'

test('reverses link list in k-group 1', () => {
  const head = buildList([1, 2, 3, 4, 5])
  const k = 2

  expect(reverseKGroup(head, k)).toEqual(buildList([2, 1, 4, 3, 5]))
})

test('reverses link list in k-group 2', () => {
  const head = buildList([1, 2, 3, 4, 5])
  const k = 3

  expect(reverseKGroup(head, k)).toEqual(buildList([3, 2, 1, 4, 5]))
})

test('reverses link list in k-group 3', () => {
  const head = buildList([1, 2, 3, 4, 5])
  const k = 1

  expect(reverseKGroup(head, k)).toEqual(head)
})

test('reverses link list in k-group 4', () => {
  const head = buildList([1, 2, 3, 4, 5])
  const k = 4

  expect(reverseKGroup(head, k)).toEqual(buildList([4, 3, 2, 1, 5]))
})

test('reverses link list in k-group 5', () => {
  const head = buildList([1])
  const k = 1

  expect(reverseKGroup(head, k)).toEqual(buildList([1]))
})

test('reverses link list in k-group 6', () => {
  const head = buildList([1, 2, 3])
  const k = 3

  expect(reverseKGroup(head, k)).toEqual(buildList([3, 2, 1]))
})
