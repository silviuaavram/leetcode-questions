/**
 * https://leetcode.com/problems/odd-even-linked-list/description
 *
 * We keep 2 pointers to odd and even lists, starting with head and head.next.
 * At each step, we move with both pointers, and update the next pointers.
 * We want to create 2 lists, and join them together at the end.
 * To stop, we check if we can't update the odd list, or after updating the odd list, we can't update it again.
 * These cases can be [1, 2, 3] or [1, 2].
 * For first we can jump from 1, but there's no way forward from there.
 * For second, we cannot jump from 1.
 * To stop, we mark an end to even list, and merge its head with the next of the odd list.
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

function oddEvenList(head: ListNode | null): ListNode | null {
  let currentOdd = head
  let currentEven = head?.next
  const headEven = head?.next

  while (currentEven && currentOdd) {
    if (currentOdd.next.next === null) {
      currentOdd.next = headEven
      currentEven.next = null

      return head
    }

    const auxOdd = currentOdd.next.next
    currentOdd.next = auxOdd
    currentOdd = auxOdd

    if (currentOdd.next === null) {
      currentOdd.next = headEven
      currentEven.next = null

      return head
    }

    const auxEven = currentEven.next.next
    currentEven.next = auxEven
    currentEven = auxEven
  }


  return head
}

export {oddEvenList}
