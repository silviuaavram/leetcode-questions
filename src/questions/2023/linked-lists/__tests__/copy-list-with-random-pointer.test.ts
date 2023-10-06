import {buildList} from '@utils'
import {Node, copyRandomList} from '../copy-list-with-random-pointer'

test('copies a linked list with random pointer 1', () => {
  const list = buildList([7, 13, 11, 10, 1]) as Node

  list.random = null
  ;(list.next as Node).random = list
  ;(list.next.next as Node).random = list.next.next.next.next as Node
  ;(list.next.next.next as Node).random = list.next.next as Node
  ;(list.next.next.next.next as Node).random = list

  const newList = copyRandomList(list)

  // nodes are not the same
  expect(newList).not.toEqual(list)
  expect(newList.next).not.toEqual(list.next)
  expect(newList.next.next).not.toEqual(list.next.next)
  expect(newList.next.next.next).not.toEqual(list.next.next.next)
  expect(newList.next.next.next.next).not.toEqual(list.next.next.next.next)

  // the values are the same
  expect(newList.val).toEqual(list.val)
  expect(newList.next.val).toEqual(list.next.val)
  expect(newList.next.next.val).toEqual(list.next.next.val)
  expect(newList.next.next.next.val).toEqual(list.next.next.next.val)
  expect(newList.next.next.next.next.val).toEqual(list.next.next.next.next.val)

  // random pointers are correct
  expect(newList.random).toBeNull()
  expect((newList.next as Node).random).toEqual(newList)
  expect((newList.next.next as Node).random).toEqual(
    newList.next.next.next.next as Node,
  )
  expect((newList.next.next.next as Node).random).toEqual(
    newList.next.next as Node,
  )
  expect((newList.next.next.next.next as Node).random).toEqual(newList)
})

test('copies a linked list with random pointer 2', () => {
  const list = buildList([1, 2]) as Node

  list.random = list.next as Node
  ;(list.next as Node).random = list.next as Node

  const newList = copyRandomList(list)

  // nodes are not the same
  expect(newList).not.toEqual(list)
  expect(newList.next).not.toEqual(list.next)

  // the values are the same
  expect(newList.val).toEqual(list.val)
  expect(newList.next.val).toEqual(list.next.val)

  // random pointers are correct
  expect(newList.random).toEqual(newList.next)
  expect((newList.next as Node).random).toEqual(newList.next)
})

test.only('copies a linked list with random pointer 3', () => {
  const list = buildList([3, 3, 3]) as Node

  list.random = null
  ;(list.next as Node).random = list as Node
  ;(list.next.next as Node).random = null

  const newList = copyRandomList(list)

  // nodes are not the same
  expect(newList).not.toEqual(list)
  expect(newList.next).not.toEqual(list.next)
  expect(newList.next.next).not.toEqual(list.next.next)

  // the values are the same
  expect(newList.val).toEqual(list.val)
  expect(newList.next.val).toEqual(list.next.val)
  expect(newList.next.next.val).toEqual(list.next.next.val)

  // random pointers are correct
  expect(newList.random).toBeNull()
  expect((newList.next as Node).random).toEqual(newList)
  expect((newList.next.next as Node).random).toBeNull()
})
