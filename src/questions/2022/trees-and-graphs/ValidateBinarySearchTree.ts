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

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }

  const traverseResult: number[] = []
  const visitedNodes: Set<TreeNode> = new Set()
  const stack: TreeNode[] = [root]

  while (stack.length) {
    const node = stack[stack.length - 1]

    if (node.left && !visitedNodes.has(node.left)) {
      stack.push(node.left)

      continue
    }

    stack.pop()
    traverseResult.push(node.val)
    visitedNodes.add(node)

    if (node.right && !visitedNodes.has(node.right)) {
      stack.push(node.right)

      continue
    }
  }

  for (let index = 0; index < traverseResult.length; index++) {
    const previousValue = traverseResult[index - 1]
    const currentValue = traverseResult[index]
    const nextValue = traverseResult[index + 1]

    if (previousValue !== undefined && previousValue >= currentValue) {
      return false
    }

    if (nextValue !== undefined && nextValue <= currentValue) {
      return false
    }
  }

  return true
}
