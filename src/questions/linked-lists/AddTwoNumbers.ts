/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import {ListNode} from '../../types'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) {
    return l2
  }

  if (!l2) {
    return l1
  }

  let current: ListNode
  let carryOver = 0
  let result: ListNode

  while (l1 || l2) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carryOver
    let newNode: ListNode = {val: sum % 10, next: null}

    l1 = l1?.next
    l2 = l2?.next

    if (current) {
      current.next = newNode
    }

    current = newNode

    carryOver = sum > 9 ? 1 : 0

    if (!result) {
      result = current
    }
  }

  if (carryOver) {
    current.next = {val: 1, next: null}
  }

  return result
}
