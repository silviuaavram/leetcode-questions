import {buildList} from '@utils'
import {insert} from './insert-into-a-sorted-circular-linked-list'

test('inserts node in list 1', () => {
  const head = buildList([3, 4, 1])
  const insertVal = 2

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.next.next.val).toEqual(2)
  expect(head.next.next.next.next).toEqual(head)
})

test('inserts node in list 2', () => {
  const head = null
  const insertVal = 1

  const result = insert(head, insertVal)

  expect(result.val).toEqual(1)
  expect(result.next).toEqual(result)
})

test('inserts node in list 3', () => {
  const head = buildList([1])
  const insertVal = 0
  head.next = head

  const result = insert(head, insertVal)

  expect(result.val).toEqual(1)
  expect(result.next.val).toEqual(0)
  expect(result.next.next).toEqual(result)
  expect(result).toBe(head)
})

test('inserts node in list 4', () => {
  const head = buildList([3, 4, 1])
  const insertVal = 4

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.val).toEqual(4)
  expect(head.next.next.val).toEqual(4)
})

test('inserts node in list 5', () => {
  const head = buildList([3, 4, 1])
  const insertVal = 5

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.val).toEqual(4)
  expect(head.next.next.val).toEqual(5)
  expect(head.next.next.next.val).toEqual(1)
})

test('inserts node in list 6', () => {
  const head = buildList([3, 4, 1])
  const insertVal = 0

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.next.val).toEqual(0)
  expect(head.next.next.next.val).toEqual(1)
})

test('inserts node in list 7', () => {
  const head = buildList([1, 3, 3])
  const insertVal = 4

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.next.val).toEqual(3)
  expect(head.next.next.next.val).toEqual(4)
})

test('inserts node in list 8', () => {
  const head = buildList([1, 3, 5])
  const insertVal = 2

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.val).toEqual(2)
  expect(head.next.next.val).toEqual(3)
})

test('inserts node in list 9', () => {
  const head = buildList([3, 5, 1])
  const insertVal = 6

  head.next.next.next = head

  insert(head, insertVal)

  expect(head.next.next.val).toEqual(6)
})
