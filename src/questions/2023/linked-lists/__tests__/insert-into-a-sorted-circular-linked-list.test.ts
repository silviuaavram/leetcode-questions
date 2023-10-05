import {buildList} from '@utils'
import {insert} from '../insert-into-a-sorted-circular-linked-list'

test('inserts 2 after 1', () => {
  const initialList = buildList([3, 4, 1])
  initialList.next.next.next = initialList

  const list = insert(initialList, 2)

  expect(list.next.next.next.val).toEqual(2)
  expect(list.next.next.next.next).toEqual(list)
})

test('inserts 0 after 5', () => {
  const initialList = buildList([3, 5, 1])
  initialList.next.next.next = initialList

  const list = insert(initialList, 0)

  expect(list.next.next.val).toEqual(0)
  expect(list.next.next.next.next).toEqual(list)
})

test('inserts 5 after 4', () => {
  const initialList = buildList([3, 4, 1])
  initialList.next.next.next = initialList

  const list = insert(initialList, 5)

  expect(list.next.next.val).toEqual(5)
  expect(list.next.next.next.next).toEqual(list)
})

test('inserts 3 after 3', () => {
  const initialList = buildList([3, 4, 1])
  initialList.next.next.next = initialList

  const list = insert(initialList, 3)

  expect(list.next.val).toEqual(3)
  expect(list.next.next.next.next).toEqual(list)
})

test('inserts 1 insite empty list', () => {
  const list = insert(null, 1)

  expect(list.val).toEqual(1)
  expect(list.next).toEqual(list)
})

test('inserts 1 at the end', () => {
  const initialList = buildList([3, 3, 3])
  initialList.next.next.next = initialList

  const list = insert(initialList, 1)

  expect(list.next.next.next.val).toEqual(1)
  expect(list.next.next.next.next).toEqual(list)
})

test('inserts 0 after 1', () => {
  const initialList = buildList([1])
  initialList.next = initialList

  const list = insert(initialList, 0)

  expect(list.next.val).toEqual(0)
  expect(list.next.next).toEqual(list)
})
