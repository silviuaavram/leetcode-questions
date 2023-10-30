/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = -1

  function parseNode(node: TreeNode): number {
    if (!node) {
      return -1 // if it's leaf, the -1 will get zeroed by the 1+ below
    }

    const distanceLeft = 1 + parseNode(node.left)
    const distanceRight = 1 + parseNode(node.right)

    // consider taking this node as a local root.
    result = Math.max(result, distanceLeft + distanceRight)

    // then return for the parent the longest of its distances.
    return Math.max(distanceLeft, distanceRight)
  }

  parseNode(root)

  return result
}

export {diameterOfBinaryTree}
