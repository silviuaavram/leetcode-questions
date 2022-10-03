import {ListNode} from '../types'

export default function BuildList(values: number[]): ListNode {
  const head: ListNode = {val: values[0], next: null}
  let current = head

  for (let index = 1; index < values.length; index++) {
    current.next = {val: values[index], next: null}
    current = current.next
  }

  return head
}
