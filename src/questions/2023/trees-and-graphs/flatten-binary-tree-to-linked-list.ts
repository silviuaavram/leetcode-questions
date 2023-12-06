/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  // does some re-linking + returns the furthest node to the right.
  function parseNode(node: TreeNode): TreeNode {
    const {left, right} = node

    if (!left && !right) {
      return node
    }

    const parsedLeft = left && parseNode(left)
    const parsedRight = right && parseNode(right)

    // if we had a parsed left node
    if (parsedLeft) {
      parsedLeft.right = right // the furthest down node to the right returned from the left branch will be linked with the current right node.
      node.right = left // this node's right is going to be the left.
    }

    node.left = null // also make the left null

    // we parsed both left and right if possible, return the furthermost down-right node from the right parsing, or the left.
    return parsedRight ?? parsedLeft
  }

  root && parseNode(root)
}

export {flatten}
