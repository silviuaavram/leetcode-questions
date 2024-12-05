/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description
 *
 * We create a graph equivalent of the tree.
 * If we find the target node, we save it to begin the graph processing.
 * For each tree node, its graph node will contain val and neighbours which are parent, left, right, if available.
 * Then we process from the starting graph node and push to result if the distance equals K.
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

type GraphNode = {
  neighbours: GraphNode[]
  val: number
}

function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number,
): number[] {
  let start: GraphNode

  function parseTreeNode(
    node: TreeNode | null,
    parent: GraphNode | null,
  ): void {
    if (!node) {
      return
    }

    const graphNode: GraphNode = {
      val: node.val,
      neighbours: parent ? [parent] : [],
    }
    if (node === target) {
      start = graphNode
    }

    parent?.neighbours.push(graphNode)

    parseTreeNode(node.left, graphNode)
    parseTreeNode(node.right, graphNode)
  }

  parseTreeNode(root, null)

  const visited = new Set()
  const result = []

  function parseGraphNode(node: GraphNode | null, distance: number): void {
    if (distance > k || visited.has(node)) {
      return
    }

    visited.add(node)

    if (distance === k) {
      result.push(node.val)

      return
    }

    for (const neighbour of node.neighbours) {
      parseGraphNode(neighbour, distance + 1)
    }
  }

  parseGraphNode(start, 0)

  return result
}

export {distanceK}
