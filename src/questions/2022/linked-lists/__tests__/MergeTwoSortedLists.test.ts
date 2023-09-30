import {buildList} from '@utils'
import {mergeTwoLists} from '../MergeTwoSortedLists'

test('merges 3 node lists', function merge3NodeLists() {
  const list1 = buildList([1, 2, 4])
  const list2 = buildList([1, 3, 4])
  const expected = buildList([1, 1, 2, 3, 4, 4])

  expect(mergeTwoLists(list1, list2)).toEqual(expected)
})

test('merges 3 node list with empty one', function merge3NodeListWithEmptyOne() {
  const list1 = buildList([1, 2, 4])
  const list2 = null
  const expected = buildList([1, 2, 4])

  expect(mergeTwoLists(list1, list2)).toEqual(expected)
})

test('merges 2 empty lists', function mergeEmptyLists() {
  const list1 = null
  const list2 = null
  const expected = null

  expect(mergeTwoLists(list1, list2)).toEqual(expected)
})

test('merges two one node lists', function mergeOneNodeLists() {
  const list1 = buildList([5])
  const list2 = buildList([15])
  const expected = buildList([5, 15])

  expect(mergeTwoLists(list1, list2)).toEqual(expected)
})

test('merges 1 node list with empty one', function merge3NodeListWithEmptyOne() {
  const list1 = buildList([0])
  const list2 = null
  const expected = buildList([0])

  expect(mergeTwoLists(list1, list2)).toEqual(expected)
})
