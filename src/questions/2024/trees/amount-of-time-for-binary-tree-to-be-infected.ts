/**
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/
 */

import {TreeNode, TreeNodeWithParent} from '@typings'

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

export function amountOfTime(root: TreeNode | null, start: number): number {
  let startNode: TreeNodeWithParent
  let totalTime = 0
  const visited = new Set<TreeNodeWithParent>()

  function setupNode(
    current: TreeNodeWithParent,
    parent: TreeNodeWithParent | null,
  ) {
    if (parent) {
      current.parent = parent
    }

    if (current.val === start) {
        startNode = current
    }

    if (current.left) {
      setupNode(current.left, current)
    }

    if (current.right) {
      setupNode(current.right, current)
    }
  }

  setupNode(root, null)

  function processNode(current: TreeNodeWithParent, time: number) {
    if (visited.has(current)) {
        return
    }

    visited.add(current)

    if (time > totalTime) {
        totalTime = time
    }

    if (current.parent) {
        processNode(current.parent, time + 1)
    }
    if (current.left) {
        processNode(current.left, time + 1)
    }
    if (current.right) {
        processNode(current.right, time + 1)
    }
  }

  processNode(startNode, 0)

  return totalTime
}
