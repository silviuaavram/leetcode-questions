import {buildList} from '@utils'
import {mergeTwoLists} from './merge-two-sorted-lists'

test('merges 2 sorted lists 1', () => {
  const list1 = buildList([1, 2, 4])
  const list2 = buildList([1, 3, 4])

  const mergedList = mergeTwoLists(list1, list2)

  expect(mergedList).toEqual(buildList([1, 1, 2, 3, 4, 4]))
})

test('merges 2 sorted lists 2', () => {
  const list1 = null
  const list2 = null

  const mergedList = mergeTwoLists(list1, list2)

  expect(mergedList).toEqual(null)
})

test('merges 2 sorted lists 3', () => {
  const list1 = null
  const list2 = buildList([0])

  const mergedList = mergeTwoLists(list1, list2)

  expect(mergedList).toEqual(buildList([0]))
})

test('merges 2 sorted lists 3', () => {
  const list1 = buildList([1])
  const list2 = null
  const mergedList = mergeTwoLists(list1, list2)

  expect(mergedList).toEqual(buildList([1]))
})
