/**
 * https://leetcode.com/problems/symmetric-tree/description
 * 
 * We do a BFS and save all nodes on each level.
 * Then we go level by level and check if the values are symmetric.
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

function isSymmetric(root: TreeNode | null): boolean {
  const queue: [TreeNode, number][] = [[root, 0]]
  const levels = new Map<number, (number | null)[]>()

  while (queue.length) {
    const [node, level] = queue.shift()

    if (!levels.has(level)) {
      levels.set(level, [])
    }

    if (!node) {
      levels.get(level).push(null)

      continue
    }

    levels.get(level).push(node.val)

    queue.push([node.left, level + 1])
    queue.push([node.right, level + 1])
  }


  for (const level of Array.from(levels.values())) {
    for (let index = 0; index < Math.floor(level.length / 2); index++) {
      if (level[index] !== level[level.length - 1 - index]) {
        return false
      }
    }
  }

  return true
}

export {isSymmetric}
