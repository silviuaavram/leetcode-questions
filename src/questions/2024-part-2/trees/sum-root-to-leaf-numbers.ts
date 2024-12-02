/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description
 *
 * We do a DFS and once we reach a leaf, we add the sum to the result.
 * If we're not on a leaf, we prase the children and pass them the updated sum.
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

function sumNumbers(root: TreeNode | null): number {
  let result = 0

  function parseNode(node: TreeNode | null, sum: number) {
    if (!node) {
      return
    }

    const sumSoFar = sum * 10 + node.val

    if (!node.left && !node.right) {
      result = result + sumSoFar
    }

    if (node.left) {
      parseNode(node.left, sumSoFar)
    }

    if (node.right) {
      parseNode(node.right, sumSoFar)
    }
  }

  parseNode(root, 0)

  return result
}

export {sumNumbers}
