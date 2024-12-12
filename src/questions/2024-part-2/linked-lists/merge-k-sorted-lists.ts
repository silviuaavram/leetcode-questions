/**
 * https://leetcode.com/problems/merge-k-sorted-lists/description
 *
 * We will use a min heap to add the linked lists.
 * We will simulate this min heap with a normal array that we will sort before every operation.
 * We pick the first element from the heap and add it to the result.
 * If there are no more nodes in that list, we remove it from the heap.
 * Otherwise, we replace the node with the next node, and iterate again.
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists) {
    return null
  }

  let result = null
  let resultHead = null
  const heap = [...lists].filter(l => !!l)

  while (heap.length) {
    heap.sort((l1, l2) => l1.val - l2.val)

    const current = heap[0]
    const copiedNode = {val: current.val, next: null}

    if (result === null) {
      result = copiedNode
      resultHead = copiedNode
    } else {
      result.next = copiedNode
      result = copiedNode
    }

    if (current.next) {
      heap[0] = heap[0].next
    } else {
      heap.splice(0, 1)
    }
  }

  return resultHead
}

export {mergeKLists}
