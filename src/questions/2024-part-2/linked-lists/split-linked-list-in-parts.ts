/**
 * https://leetcode.com/problems/split-linked-list-in-parts/description
 *
 *
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

function splitListToParts(
  head: ListNode | null,
  k: number,
): Array<ListNode | null> {
  if (!head) {
    return new Array(k).fill(null)
  }
  
  let size = 0
  let current = head

  while (current) {
    size++
    current = current.next
  }

  if (!size) {
    return
  }

  const partSize = Math.floor(size / k)
  let remainder = size % k
  const result = []
  current = head

  for (let indexK = 0; indexK < k; indexK++) {
    if (!current) {
      result.push(null)

      continue
    }
    let size = partSize

    if (remainder) {
      remainder--
      size++
    }

    const partHead = current

    for (let indexPart = 0; indexPart < size - 1; indexPart++) {
      current = current.next
    }

    result.push(partHead)

    if (current) {
      const next = current.next
      current.next = null
      current = next
    }
  }

  return result
}

export {splitListToParts}
