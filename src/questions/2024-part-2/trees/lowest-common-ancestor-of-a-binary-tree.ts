/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description
 * 
 * Go with a in-order traversal until we find both nodes.
 * When we find the first we save the path to it.
 * Whenw e find the second we start to compare paths and stop until nodes are different.
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let firstPath: TreeNode[]
  let result: TreeNode
  const queue = [root]
  const visited = new Set<TreeNode>()

  while (queue.length) {
    const current = queue[queue.length - 1]

    if (current === p || current === q) {
      if (firstPath) {
        for (
          let index = 0;
          index < Math.min(firstPath.length, queue.length);
          index++
        ) {
          if (firstPath[index] === queue[index]) {
            result = firstPath[index]
          } else {
            return result
          }
        }
      } else {
        firstPath = [...queue]
      }
    }

    if (current.left && !visited.has(current.left)) {
      queue.push(current.left)
      continue
    }
    if (current.right && !visited.has(current.right)) {
      queue.push(current.right)
      continue
    }

    visited.add(current)
    queue.pop()
  }

  return result
}

export {lowestCommonAncestor}
