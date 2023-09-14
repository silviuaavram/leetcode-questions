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

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  let current1 = list1
  let current2 = list2
  let result: ListNode
  let current: ListNode

  while (current1 && current2) {
    const isFirstNodeSmaller = current1.val < current2.val
    const newNode: ListNode = {
      val: isFirstNodeSmaller ? current1.val : current2.val,
      next: null,
    }

    if (!current) {
      current = newNode
    } else {
      current.next = newNode
      current = current.next
    }

    if (isFirstNodeSmaller) {
      current1 = current1.next
    } else {
      current2 = current2.next
    }

    if (!result) {
      result = current
    }
  }

  current.next = current1 ?? current2

  return result
}
