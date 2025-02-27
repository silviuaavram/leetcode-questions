/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description
 * 
 * We create a function that reverses a list frost start to end.
 * We then parse the list with an index, and if we reach multiple K, we apply the function on the 2 edge nodes.
 * We use a last link node to be able to link sublists.
 * When linking, for the current sublist, the end is the new start, and viceversa.
 * We link the last link node to end, and update it to be start, for the next linking.
 * We then continue iterating.
 * At the end, we link last link to start, to link the last reversed sublist to remaining non-reversed sublist.
 */

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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k < 2) {
    return head
  }

  function reverseGroup(start: ListNode, end: ListNode) {
    let current = start
    let previous = null

    while (current) {
      const {next} = current

      current.next = previous
      previous = current

      if (current === end) {
        break
      }

      current = next
    }
  }

  let end = head
  let start = head
  let index = 0
  let lastLink: ListNode | null = null

  while (end) {
    index++

    if (index % k === 0) {
      const {next} = end

      reverseGroup(start, end)

      if (lastLink === null) {
        head = end
      } else {
        lastLink.next = end
      }

      lastLink = start
      start = next
      end = next
    } else {
      end = end.next
    }
  }

  lastLink.next = start

  return head
}

export {reverseKGroup}
