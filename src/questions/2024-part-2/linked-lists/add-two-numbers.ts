/**
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * We will add node by node because some numbers are going to be very big.
 * If we have a remaining a carry over after summing it up, we will add another node with value 1.
 */

import {ListNode} from '@typings'

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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let current1 = l1.next
  let current2 = l2.next
  let carryOver = 0
  let sum = l1.val + l2.val

  if (sum > 9) {
    sum = sum % 10
    carryOver = 1
  }

  let current = {val: sum, next: null}
  const result = current

  while (current1 || current2) {
    let sum = (current1?.val ?? 0) + (current2?.val ?? 0) + carryOver
    carryOver = 0

    if (sum > 9) {
      sum = sum % 10
      carryOver = 1
    }

    const newNode = {val: sum, next: null}
    current.next = newNode
    current = current.next

    current1 = current1?.next
    current2 = current2?.next
  }

  if (carryOver) {
    current.next = {val: 1, next: null}
  }

  return result
}

export {addTwoNumbers}
