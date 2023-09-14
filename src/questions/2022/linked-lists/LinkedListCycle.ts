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

export function hasCycle(head: ListNode | null): boolean {
  let skip1: ListNode = head
  let skip2: ListNode = head?.next

  while (skip1 && skip2) {
    if (skip1 === skip2) {
      return true
    }

    skip1 = skip1.next
    skip2 = skip2.next?.next
  }

  return false
}
