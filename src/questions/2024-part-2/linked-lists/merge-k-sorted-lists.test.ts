import {buildList} from '@utils'
import {mergeKLists} from './merge-k-sorted-lists'

test('merges linked lists 1', () => {
  const lists = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ].map(list => buildList(list))

  expect(mergeKLists(lists)).toEqual(buildList([1, 1, 2, 3, 4, 4, 5, 6]))
})

test('merges linked lists 2', () => {
  expect(mergeKLists(null)).toEqual(null)
})

test('merges linked lists 3', () => {
  expect(mergeKLists([null])).toEqual(null)
})
