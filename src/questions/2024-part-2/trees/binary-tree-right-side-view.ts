/**
 * https://leetcode.com/problems/binary-tree-right-side-view/description
 *
 * We do a BFS and add the nodes in a levels map.
 * Then we get the last node from each level.
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const levels = new Map<number, TreeNode[]>()
  const queue = [{node: root, level: 0}]

  while (queue.length) {
    const {node, level} = queue.splice(0, 1)[0]
    if (!levels.has(level)) {
      levels.set(level, [])
    }

    levels.get(level).push(node)

    if (node.left) {
      queue.push({node: node.left, level: level + 1})
    }

    if (node.right) {
      queue.push({node: node.right, level: level + 1})
    }
  }

  return Array.from(levels.values()).map(array => array[array.length - 1].val)
}

export {rightSideView}
