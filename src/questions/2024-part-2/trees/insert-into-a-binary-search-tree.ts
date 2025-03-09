/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/description
 * 
 * We start from the root and check the value.
 * If value is larger and right is empty, we add it there and exit.
 * Otherwise, we check on the right node.
 * Similar way for the left part.
 */
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  const newNode = {val, left: null, right: null}
  if (!root) {
    return newNode
  }

  let current = root

  while (current) {
    if (current.val > val) {
      if (current.left === null) {
        current.left = newNode

        return root
      }

      current = current.left

      continue
    }

    if (current.val < val) {
      if (current.right === null) {
        current.right = newNode

        return root
      }

      current = current.right

      continue
    }
  }

  return root
}

export {insertIntoBST}
