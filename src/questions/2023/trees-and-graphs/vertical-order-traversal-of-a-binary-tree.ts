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

type QueueItem = {node: TreeNode; column: number; row: number}

function verticalTraversal(root: TreeNode | null): number[][] {
  const queue: QueueItem[] = [{node: root, column: 0, row: 0}]
  const columns: Map<number, {val: number; row: number}[]> = new Map()

  while (queue.length) {
    const {node, column, row} = queue.splice(0, 1)[0]

    if (node.left) {
      queue.push({node: node.left, column: column - 1, row: row + 1})
    }

    if (node.right) {
      queue.push({node: node.right, column: column + 1, row: row + 1})
    }

    if (!columns.has(column)) {
      columns.set(column, [])
    }

    const columnNodes = columns.get(column)

    columnNodes.push({val: node.val, row})
  }

  return Array.from(columns.entries())
    .sort(([column1], [column2]) => column1 - column2)
    .map(([column, values]) =>
      values
        .sort((val1, val2) => {
          if (val1.row === val2.row) {
            return val1.val - val2.val
          }
          return val1.row - val2.row
        })
        .map(({val}) => val),
    )
}

export {verticalTraversal}
