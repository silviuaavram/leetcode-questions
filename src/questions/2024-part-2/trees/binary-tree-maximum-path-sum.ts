/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * For each node, we have an option to include it in a path, or start a new path with the node as its head.
 * To get the sum of a path, our traversal function will return the max value of that node, which may involve more nodes starting with left or right.
 * If from the left or right we get negative values, there's no reason to continue the path downwards, we just return the node value to its parent.
 * We also store the sums in a map for avoiding duplicate calculations.
 * If we've reached a null node, we return 0 as it's better to consider not moving on path than considering the other path that could be negative.
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

function maxPathSum(root: TreeNode | null): number {
  const sums = new Map<TreeNode, number>()
  let result: number = undefined

  function parseNode(current: TreeNode): number | undefined {
    if (!current) {
      return 0
    }

    if (sums.has(current)) {
      return sums.get(current)
    }

    const sumOnLeft = Math.max(0, parseNode(current.left))
    const sumOnRight = Math.max(0, parseNode(current.right))
    const sumWithCurrentAsRoot = current.val + sumOnLeft + sumOnRight
    const sumWithCurrentAsPath = current.val + Math.max(sumOnLeft, sumOnRight)

    sums.set(current, sumWithCurrentAsPath)

    const resultToBeAdded = Math.max(sumWithCurrentAsPath, sumWithCurrentAsRoot)

    if (result === undefined) {
      result = resultToBeAdded
    } else {
      result = Math.max(result, resultToBeAdded)
    }

    return sumWithCurrentAsPath
  }

  parseNode(root)

  return result
}

export {maxPathSum}
