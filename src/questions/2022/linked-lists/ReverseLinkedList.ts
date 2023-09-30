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

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }

  function reverseNode(node: ListNode, previous: ListNode = null): ListNode {
    const next = node.next
    node.next = previous

    if (!next) {
      return node
    } else {
      return reverseNode(next, node)
    }
  }

  return reverseNode(head)
}
