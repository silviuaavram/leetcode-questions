/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * 
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

import {TreeNode} from '@typings'

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const currentQueue: TreeNode[] = [root]
  const nextQueue: TreeNode[] = []
  const result: number[] = []

  while (currentQueue.length || nextQueue.length) {
    if (!currentQueue.length) {
      currentQueue.push(...nextQueue)
      nextQueue.length = 0

      continue
    }

    if (currentQueue.length === 1) {
      result.push(currentQueue[0].val)
    }

    const currentNode = currentQueue.splice(0, 1)[0]

    if (currentNode.left) {
      nextQueue.push(currentNode.left)
    }

    if (currentNode.right) {
      nextQueue.push(currentNode.right)
    }
  }

  return result
}

export {rightSideView}
