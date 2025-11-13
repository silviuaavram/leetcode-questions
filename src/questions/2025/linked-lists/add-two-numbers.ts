/**
 * https://leetcode.com/problems/add-two-numbers/description
 */

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
import {ListNode} from '@typings'

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let current1 = l1
  let current2 = l2
  let carryOver = 0
  let head: ListNode
  let currentResult: ListNode

  while (current1 && current2) {
    let sum = current1.val + current2.val + carryOver

    if (sum > 9) {
      carryOver = 1
      sum %= 10
    } else {
      carryOver = 0
    }

    if (!currentResult) {
      const firstNode = {val: sum, next: null}

      head = firstNode
      currentResult = firstNode
    } else {
      currentResult.next = {val: sum, next: null}
      currentResult = currentResult.next
    }

    current1 = current1.next
    current2 = current2.next
  }

  while (current1) {
    let sum = current1.val + carryOver

    if (sum === 10) {
      sum = 0
      carryOver = 1
    } else {
      carryOver = 0
    }

    currentResult.next = {val: sum, next: null}
    currentResult = currentResult.next

    current1 = current1.next
  }

  while (current2) {
    let sum = current2.val + carryOver

    if (sum === 10) {
      sum = 0
      carryOver = 1
    } else {
      carryOver = 0
    }

    currentResult.next = {val: sum, next: null}
    currentResult = currentResult.next

    current2 = current2.next
  }

  if (carryOver) {
    currentResult.next = {val: 1, next: null}
  }

  return head
}

export {addTwoNumbers}
