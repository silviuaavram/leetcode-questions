/**
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description
 * 
 * We parse recursively and keep track of width and depth.
 * We use a map to add nodes by width.
 * For each entry, we add both the value and the depth, as we need both for comparison at the end.
 * Then we sort the map entries first by width.
 * Then, we get the values from each width value, and sort them by depth then by value.
 * We strip the depth and now we have the requested format.
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

function verticalTraversal(root: TreeNode | null): number[][] {
  const levels = new Map<number, [number, number][]>()

  function parseNode(node: TreeNode | null, x: number, y: number) {
    if (!node) {
      return
    }

    if (!levels.has(x)) {
      levels.set(x, [])
    }

    levels.get(x).push([node.val, y])

    parseNode(node.left, x - 1, y + 1)
    parseNode(node.right, x + 1, y + 1)
  }

  parseNode(root, 0, 0)

  return Array.from(levels.entries())
    .sort(([x1, _values1], [x2, _values2]) => x1 - x2)
    .map(entry =>
      entry[1]
        .sort(([v1, y1], [v2, y2]) => {
          if (y1 === y2) {
            return v1 - v2
          }

          return y1 - y2
        })
        .map(([v, _y]) => v),
    )
}

export {verticalTraversal}
