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
function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const columns = new Map<number, number[]>()
  const currentRow: [{node: TreeNode; level: number}] = [{node: root, level: 0}]
  const nextRow = []

  // standard BFS, keep both node and its level in a row entry.
  function processNode(): void {
    // switch rows if needed.
    if (!currentRow.length) {
      if (!nextRow.length) {
        return
      }

      currentRow.push(...nextRow)
      nextRow.length = 0
    }

    const {node, level} = currentRow.splice(0, 1)[0]

    if (!columns.has(level)) {
      columns.set(level, [])
    }

    columns.get(level).push(node.val)

    if (node.left) {
      nextRow.push({node: node.left, level: level - 1})
    }

    if (node.right) {
      nextRow.push({node: node.right, level: level + 1})
    }

    processNode()
  }

  processNode()

  // sort the columns by index and return the values.
  return Array.from(columns.entries())
    .sort(([columnIndex1], [columnIndex2]) => {
      return columnIndex1 - columnIndex2
    })
    .map(([_level, nodes]) => nodes)
}

export {verticalOrder}
