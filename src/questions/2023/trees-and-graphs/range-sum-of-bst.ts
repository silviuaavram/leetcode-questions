import {TreeNode} from '@typings'

/**
 * https://leetcode.com/problems/range-sum-of-bst/
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum = 0

  if (!root) {
    return 0
  }

  function parseNode(node: TreeNode) {
    if (node.val >= low && node.val <= high) {
        sum += node.val
    }

    if (node.val >= low && node.left) {
        parseNode(node.left)
    }

    if (node.val <= high && node.right) {
        parseNode(node.right)
    }
  }

  parseNode(root)

  return sum
}

export {rangeSumBST}
