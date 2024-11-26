/**
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/description
 *
 * We do a BFS traversal of the tree and keep track of the vertical level.
 * BFS is needed to cover the order requirements when multiple nodes are found horizontally on the same level.
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

function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const verticalOrder = new Map<number, TreeNode[]>()
  let minLevel = Infinity
  let maxLevel = -Infinity

  const queue = [{node: root, level: 0}]

  while (queue.length) {
    const {node, level} = queue.splice(0, 1)[0]

    minLevel = Math.min(minLevel, level)
    maxLevel = Math.max(maxLevel, level)

    if (!verticalOrder.has(level)) {
      verticalOrder.set(level, [])
    }

    verticalOrder.get(level).push(node)

    if (node.left) {
      queue.push({node: node.left, level: level - 1})
    }

    if (node.right) {
      queue.push({node: node.right, level: level + 1})
    }
  }

  const result = []

  for (let index = minLevel; index <= maxLevel; index++) {
    result.push(verticalOrder.get(index).map(node => node.val))
  }

  return result
}

export {verticalOrder}
