/**
 * https://leetcode.com/problems/middle-of-the-linked-list/description
 */

import { ListNode } from "@typings"

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

function middleNode(head: ListNode | null): ListNode | null {
  let current = head
  let size = 0

  while (current) {
    size++
    current = current.next
  }

  current = head

  size = Math.floor(size / 2)

  while (size) {
    size--
    current = current.next
  }

  return current
}

export {middleNode}
