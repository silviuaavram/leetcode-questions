/**
 * https://leetcode.com/problems/closest-binary-search-tree-value
 *
 * We do a DFS parsing and update the result if it's closer to target.
 * Also, since it's a BST, we go left or right depending if value is greater or smaller than target.
 * There's no reason to go right if value is already larger than target.
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

function closestValue(root: TreeNode | null, target: number): number {
  let result = root.val

  function parseNode(node: TreeNode | null): void {
    if (!node) {
      return
    }

    const {val} = node

    if (Math.abs(val - target) < Math.abs(result - target)) {
      result = val
    } else if (Math.abs(val - target) === Math.abs(result - target)) {
      result = Math.min(result, val)
    }

    if (val >= target) {
      parseNode(node.left)
    }

    if (val <= target) {
      parseNode(node.right)
    }
  }

  parseNode(root)

  return result
}

export {closestValue}
