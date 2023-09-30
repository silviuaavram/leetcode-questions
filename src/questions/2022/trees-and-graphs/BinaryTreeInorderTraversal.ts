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

import {TreeNode} from '@typings'

export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  const visited = new Set<TreeNode>()

  function visitNode(node: TreeNode): void {
    if (visited.has(node)) {
      return
    }

    if (node.left) {
      visitNode(node.left)
    }

    result.push(node.val)
    visited.add(node)

    if (node.right) {
      visitNode(node.right)
    }
  }

  if (root) {
    visitNode(root)
  }

  return result
}
