/**
 * https://leetcode.com/problems/merge-two-sorted-lists/description
 * 
 * We create a new list and pick nodes to duplicate from either of the lists.
 * We chain the cloned nodes and return the head.
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let head = null
  let current: ListNode
  let current1 = list1
  let current2 = list2

  while (current1 || current2) {
    let next

    if (!current1 || (current2 && current2.val < current1.val)) {
      next = {val: current2.val, next: null}
      current2 = current2.next
    } else {
      next = {val: current1.val, next: null}
      current1 = current1.next
    }

    if (!current) {
      current = next
      head = current
    } else {
      current.next = next
      current = current.next
    }
  }

  return head
}

export {mergeTwoLists}
