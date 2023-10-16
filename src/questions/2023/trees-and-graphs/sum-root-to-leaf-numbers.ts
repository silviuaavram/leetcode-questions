import {TreeNode} from '@typings'

/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
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

function sumNumbers(root: TreeNode | null): number {
  let resultSum = 0

  function parseNode(node: TreeNode, sum: number): void {
    const newSum = sum * 10 + node.val

    if (!node.left && !node.right) {
      resultSum += newSum
    }

    if (node.left) {
      parseNode(node.left, newSum)
    }

    if (node.right) {
      parseNode(node.right, newSum)
    }
  }

  parseNode(root, 0)

  return resultSum
}

export {sumNumbers}
