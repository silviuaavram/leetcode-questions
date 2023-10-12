/**
 * https://leetcode.com/problems/closest-binary-search-tree-value/
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

function closestValue(root: TreeNode | null, target: number): number {
  let result: number
  let minDifference: number

  function processNode(currentNode: TreeNode) {
    if (!currentNode) {
      return
    }

    const difference = currentNode.val - target
    const absoluteDifference = Math.abs(difference)

    if (result === undefined || absoluteDifference < minDifference) {
      result = currentNode.val
      minDifference = absoluteDifference
    } else if (absoluteDifference === minDifference) {
      result = Math.min(result, currentNode.val)
    }

    if (difference > 0) {
      processNode(currentNode.left)
    } else {
      processNode(currentNode.right)
    }
  }

  processNode(root)

  return result
}

export {closestValue}
