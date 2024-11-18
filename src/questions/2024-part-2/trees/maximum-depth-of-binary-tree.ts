/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description
 * 
 * We do a dfs traversal of the tree, keep track of the depth on every stage.
 * We update the max depth on every stage.
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

function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0

  function parseNode(currentNode: TreeNode, depth: number) {
    if (!currentNode) {
      return
    }

    maxDepth = Math.max(maxDepth, depth)

    parseNode(currentNode.left, depth + 1)
    parseNode(currentNode.right, depth + 1)
  }

  parseNode(root, 1)

  return maxDepth
}

export {maxDepth}
