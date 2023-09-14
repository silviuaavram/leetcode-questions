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

import {TreeNode} from '../../types'

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []

  if (!root) {
    return result
  }

  const nodeQueue: TreeNode[] = [root]
  const levelQueue: TreeNode[] = []
  const levelResult: number[] = []

  while (nodeQueue.length) {
    const currentNode = nodeQueue.splice(0, 1)[0]

    if (currentNode.left) {
      levelQueue.push(currentNode.left)
    }

    if (currentNode.right) {
      levelQueue.push(currentNode.right)
    }

    levelResult.push(currentNode.val)

    if (!nodeQueue.length) {
      if (levelQueue.length) {
        nodeQueue.push(...levelQueue)
        levelQueue.length = 0
      }

      result.push([...levelResult])
      levelResult.length = 0
    }
  }

  return result
}
