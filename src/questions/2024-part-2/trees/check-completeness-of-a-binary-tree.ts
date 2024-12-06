/**
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/description
 * 
 * We use a BFS approach and iterate.
 * We mark the time when we find a null node.
 * If we encounter all null nodes until the end, it's fine.
 * If we encounter a non null node after a null node, means it's not complete.
 * Also, if we don't encounter any null node at all, it's fully complete.
 */

import {TreeNode} from '@typings'

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isCompleteTree(root: TreeNode | null): boolean {
  const queue = [root]
  let foundNull = false

  while (queue.length) {
    const current = queue.splice(0, 1)[0]

    if (current === null) {
      foundNull = true

      continue
    }

    if (current !== null && foundNull) {
      return false
    }

    queue.push(current.left)
    queue.push(current.right)
  }

  return true
}

export {isCompleteTree}
