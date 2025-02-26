/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal
 *
 * We use 2 maps and a queue.
 * The queue we use for performing a BFS.
 * First map is to keep each node's level.
 * The second map is to track all nodes for each level.
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const nodeLevels = new Map<TreeNode, number>([[root, 0]])
  const levels = new Map<number, TreeNode[]>()

  const queue = [root]

  while (queue.length) {
    const currentNode = queue.splice(0, 1)[0]
    const currentLevel = nodeLevels.get(currentNode)

    if (!levels.has(currentLevel)) {
      levels.set(currentLevel, [])
    }

    levels.get(currentLevel).push(currentNode)

    if (currentNode.left) {
      nodeLevels.set(currentNode.left, currentLevel + 1)
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      nodeLevels.set(currentNode.right, currentLevel + 1)
      queue.push(currentNode.right)
    }
  }

  const result = []

  for (let index = 0; index < levels.size; index++) {
    result.push(levels.get(index).map(node => node.val))
  }

  return result
}

export {levelOrder}
