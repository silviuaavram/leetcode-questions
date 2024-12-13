/**
 * https://leetcode.com/problems/palindrome-linked-list/description
 * 
 * We just iterate through the list, get the values, and check palindrome.
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

function isPalindrome(head: ListNode | null): boolean {
  const values = []
  let node = head

  while (node) {
    values.push(node.val)

    node = node.next
  }

  for (let index = 0; index < Math.floor(values.length / 2); index++) {
    if (values[index] !== values[values.length - 1 - index]) {
        return false
    }
  }

  return true
}

export {isPalindrome}
