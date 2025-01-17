/**
 * https://leetcode.com/problems/longest-univalue-path/description
 *
 * We will use DFS to parse the tree.
 * First we try to go all the way to the leaves.
 * If we find a leaf, we should return 0, since it has no possible path.
 * For non-leaf node, we check if its value is equal to either left or right.
 * If node value is equal to any child, we consider that returned path, and also increment it.
 * Otherwise, that returned path is going to be considered 0.
 * We update the result with both paths summed up.
 * We return the biggest path from either the left or right.
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

function longestUnivaluePath(root: TreeNode | null): number {
  let result = 0

  function parseNode(node: TreeNode): number {
    if (!node) {
      return 0
    }

    const resultLeft = parseNode(node.left)
    const resultRight = parseNode(node.right)
    let finalLeft = 0
    let finalRight = 0

    if (node.left?.val === node.val) {
      finalLeft = resultLeft + 1
    }

    if (node.right?.val === node.val) {
      finalRight = resultRight + 1
    }

    result = Math.max(result, finalLeft + finalRight)

    return Math.max(finalLeft, finalRight)
  }

  parseNode(root)

  return result
}

export {longestUnivaluePath}
