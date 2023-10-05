import {ListNode as Node} from '@typings'

/**
 * https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
 *
 * Definition for node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     constructor(val?: number, next?: Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */

function insert(head: Node | null, insertVal: number): Node | null {
  if (!head) {
    const newHead = {val: insertVal, next: undefined}
    newHead.next = newHead

    return newHead
  }

  let current = head

  while (true) {
    // insert the node if:
    if (
      current.next === head || // we reach the end of the list
      (current.val <= insertVal && current.next.val >= insertVal) || // between a smaller or equal and a larger or equal value
      (current.val > current.next.val && // after the sort breaking of the list
        (insertVal < current.next.val || insertVal > current.val)) // if the node is greater than the max or lesser than the min
    ) {
      current.next = {val: insertVal, next: current.next}

      return head
    }

    current = current.next
  }
}

export {insert}
