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

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let listASize = 0
  let listBSize = 0

  let currentNode = headA

  while (currentNode) {
    listASize++
    currentNode = currentNode.next
  }

  currentNode = headB

  while (currentNode) {
    listBSize++
    currentNode = currentNode.next
  }

  let currentA = headA
  let currentB = headB
  const sizeDifference = Math.abs(listASize - listBSize)

  if (listASize > listBSize) {
    for (let index = 0; index < sizeDifference; index++) {
      currentA = currentA.next
    }
  } else if (listBSize > listASize) {
    for (let index = 0; index < sizeDifference; index++) {
      currentB = currentB.next
    }
  }

  while (currentA && currentB) {
    if (currentA === currentB) {
      return currentA
    }

    currentA = currentA.next
    currentB = currentB.next
  }

  return null
}
