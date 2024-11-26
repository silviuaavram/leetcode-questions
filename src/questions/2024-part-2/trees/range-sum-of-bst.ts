/**
 * https://leetcode.com/problems/range-sum-of-bst/description
 *
 * We do a DFS traversal, and add node val if within boundaries.
 * Then we go left if value is greater than low.
 * Then we go right if value is lesser than high.
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum = 0

  function parseNode(node: TreeNode | null) {
    if (!node) {
      return
    }

    if (node.val >= low && node.val <= high) {
      sum += node.val
    }

    if (node.val < high) {
      parseNode(node.right)
    }

    if (node.val > low) {
      parseNode(node.left)
    }
  }

  parseNode(root)

  return sum
}

export {rangeSumBST}
