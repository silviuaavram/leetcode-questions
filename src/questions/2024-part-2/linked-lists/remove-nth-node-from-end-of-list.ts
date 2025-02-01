/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description
 *
 * We iterate the list and save every node in an array.
 * Then we get the index to remove by subtracting n from array size.
 * If index is 0, we just remove head->next.
 * Otherwise, we get the index - 1 node from the array, and cut the next node.
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null
  }

  const nodes: ListNode[] = []

  let current = head

  while (current) {
    nodes.push(current)

    current = current.next
  }

  const indexToRemove = nodes.length - n

  if (indexToRemove === 0) {
    return head.next
  }

  current = head

  for (let index = 0; index < indexToRemove - 1; index++) {
    current = current.next
  }

  current.next = current.next.next

  return head
}

export {removeNthFromEnd}
