/**
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/
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

function isCompleteTree(root: TreeNode | null): boolean {
  const nodes = [root]
  const result: TreeNode[] = []

  // Standard BSF, output nodes in level order including empty ones
  while (nodes.length) {
    const current = nodes.splice(0, 1)[0]

    current && nodes.push(current.left)
    current && nodes.push(current.right)

    result.push(current)
  }

  let foundEmpty = false

  // if there is an empty one before a non-emtpy node, it means the tree is not complete
  for (let index = 0; index < result.length; index++) {
    if (!result[index]) {
      foundEmpty = true
    } else if (foundEmpty) {
      return false
    }
  }

  return true
}

export {isCompleteTree}
