import {buildList} from '@utils'
import {_Node, copyRandomList} from './copy-list-with-random-pointer'

test('copies list with random pointer 1', () => {
  const head = buildList([7, 13, 11, 10, 1])

  ;(head as _Node).random = null
  ;(head.next as _Node).random = head as _Node
  ;(head.next.next as _Node).random = head.next.next.next.next as _Node
  ;(head.next.next.next as _Node).random = head.next.next as _Node
  ;(head.next.next.next.next as _Node).random = head as _Node

  const newHead = copyRandomList(head as _Node)

  expect(newHead.val).toEqual(head.val)
  expect(newHead).not.toBe(head)
  expect(newHead.next.val).toEqual(head.next.val)
  expect(newHead.next).not.toBe(head.next)
  expect(newHead.next.next.val).toEqual(head.next.next.val)
  expect(newHead.next.next).not.toBe(head.next.next)
  expect(newHead.next.next.next.val).toEqual(head.next.next.next.val)
  expect(newHead.next.next.next).not.toBe(head.next.next.next)
  expect(newHead.next.next.next.next.val).toEqual(head.next.next.next.next.val)
  expect(newHead.next.next.next.next).not.toBe(head.next.next.next.next)
})

test('copies list with random pointer 2', () => {
  const head = buildList([1,2])

  ;(head as _Node).random = head.next as _Node
  ;(head.next as _Node).random = head.next as _Node

  const newHead = copyRandomList(head as _Node)

  expect(newHead.val).toEqual(head.val)
  expect(newHead).not.toBe(head)
  expect(newHead.next.val).toEqual(head.next.val)
  expect(newHead.next).not.toBe(head.next)
})
