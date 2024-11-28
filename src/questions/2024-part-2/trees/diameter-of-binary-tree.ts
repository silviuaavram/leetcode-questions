/**
 * https://leetcode.com/problems/diameter-of-binary-tree/description
 * 
 * We parse the tree with a DFS.
 * If the node is null, we return 0.
 * Otherwise, we return the 1 + maximum distance between left and right.
 * We also use the distances retutrned form left and right and check if diameter using this node as root is max.
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0

  function parseNode(node: TreeNode | null): number {
    if (!node) {
      return 0
    }

    const lengthOnLeft = parseNode(node.left)
    const lengthOnRight = parseNode(node.right)

    diameter = Math.max(diameter, lengthOnLeft + lengthOnRight)

    return 1 + Math.max(lengthOnLeft, lengthOnRight)
  }

  parseNode(root)

  return diameter
}

export {diameterOfBinaryTree}
