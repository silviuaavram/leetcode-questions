/**
 * https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/description
 *
 * If there's an empty node, we return a new circular node.
 * Otherwise, we iterate through the list with a current node, and we can add the new node in 4 cases:
 * 1. at the end, if current node is head.
 * 2. next to the current node, if current node has the same value.
 * 3. between current and next, if value is between them.
 * 4. at the sequence reset, if value is greater than largest number or lesser than smallest number.
 */
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *
 *     constructor(val?: number, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */

import {ListNode as _Node} from '@typings'

function insert(head: _Node | null, insertVal: number): _Node | null {
  if (!head) {
    const result: _Node = {val: insertVal, next: null}
    result.next = result

    return result
  }

  let current = head

  while (current) {
    if (current.next === head) {
      const lastNode = {val: insertVal, next: head}

      current.next = lastNode

      return head
    }

    const nextToSameNode = insertVal === current.val
    const betweenTwoNodes =
      insertVal > current.val && insertVal < current.next.val
    const atSequenceReset =
      current.val > current.next.val &&
      (insertVal < current.next.val || insertVal > current.val)

    if (nextToSameNode || betweenTwoNodes || atSequenceReset) {
      const newNode = {val: insertVal, next: current.next}
      current.next = newNode

      return head
    }

    current = current.next
  }

  return head
}

export {insert}
