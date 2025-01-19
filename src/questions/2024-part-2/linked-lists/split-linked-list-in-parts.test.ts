import {buildList} from '@utils'
import {splitListToParts} from './split-linked-list-in-parts'

test('splits list into parts 1', () => {
  const list = buildList([1, 2, 3])
  const k = 5

  expect(splitListToParts(list, k)).toEqual([
    buildList([1]),
    buildList([2]),
    buildList([3]),
    null,
    null,
  ])
})

test('splits list into parts 2', () => {
  const list = buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const k = 3

  expect(splitListToParts(list, k)).toEqual([
    buildList([1, 2, 3, 4]),
    buildList([5, 6, 7]),
    buildList([8, 9, 10]),
  ])
})

test('splits list into parts 3', () => {
  expect(splitListToParts(null, 3)).toEqual([null, null, null])
})
