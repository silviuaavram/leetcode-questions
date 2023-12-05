/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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

function maxLevelSum(root: TreeNode | null): number {
  let maxSum: number
  let result = 1
  let currentSum = 0
  let currentLevel = 1
  const level: TreeNode[] = [root]
  const nextLevel: TreeNode[] = []

  while (level.length) {
    const current = level.splice(0, 1)[0]

    currentSum += current.val

    if (current.left) {
      nextLevel.push(current.left)
    }

    if (current.right) {
      nextLevel.push(current.right)
    }

    if (!level.length) {
      if (maxSum === undefined || maxSum < currentSum) {
        maxSum = currentSum
        result = currentLevel
      }

      if (nextLevel.length) {
        level.push(...nextLevel)
        nextLevel.length = 0

        currentLevel++
        currentSum = 0
      }
    }
  }

  return result
}

export {maxLevelSum}
