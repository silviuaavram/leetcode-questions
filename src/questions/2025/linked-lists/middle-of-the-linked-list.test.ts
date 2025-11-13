import { buildList } from "@utils";
import { middleNode } from "./middle-of-the-linked-list";

test('return middle of linked list 1', () => {
  const head = buildList([1,2,3,4,5])

  expect(middleNode(head)).toEqual(head.next.next)
})

test('return middle of linked list 2', () => {
  const head = buildList([1,2,3,4,5,6])

  expect(middleNode(head)).toEqual(head.next.next.next)
})

