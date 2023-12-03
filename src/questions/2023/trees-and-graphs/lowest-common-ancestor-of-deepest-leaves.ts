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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let maxDepth = 0
  const deepestLeavesPaths: TreeNode[][] = []

  // DFS, get all the lowest leaves
  function parseNode(node: TreeNode, path: TreeNode[]): void {
    if (!node) {
      return
    }

    const depth = path.length + 1

    // if we are in a maximum depth, clear the former paths and increase the max depth.
    if (depth > maxDepth) {
      maxDepth = depth
      deepestLeavesPaths.length = 0
    }

    const pathWithNode = [...path, node]

    // add the path until this node
    if (depth === maxDepth) {
      deepestLeavesPaths.push(pathWithNode)
    }

    parseNode(node.left, pathWithNode)
    parseNode(node.right, pathWithNode)
  }

  parseNode(root, [])

  let result = null

  for (let depth = 0; depth < maxDepth; depth++) {
    for (let index = 0; index < deepestLeavesPaths.length - 1; index++) {
      if (
        deepestLeavesPaths[index][depth] !==
        deepestLeavesPaths[index + 1][depth]
      ) {
        return result
      }
    }

    result = deepestLeavesPaths[0][depth]
  }

  return result
}

export {lcaDeepestLeaves}
