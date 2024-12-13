/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description
 * 
 * We iterate in DFS pre-order.
 * At each step, we keep saved the last parsed node so we can link the current node to it.
 * The catch is to get the next left and right nodes before we change the links.
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  let lastNodeParsed: TreeNode | undefined = undefined

  function parseNode(node: TreeNode | null): void {
    if (!node) {
      return
    }

    if (lastNodeParsed) {
        lastNodeParsed.left = null
        lastNodeParsed.right = node
    }

    lastNodeParsed = node

    const {left, right} = node

    parseNode(left)
    parseNode(right)
  }

  parseNode(root)
}

export {flatten}
