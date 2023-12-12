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

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  // values are unique, and we keep, for each node, their level and their max height for the subtree with that node as root
  const nodes = new Map<number, {level: number; height: number}>()
  // we also keep all the nodes on each level
  const levels: number[][] = []

  function parseNode(node: TreeNode, level: number): void {
    if (!node) {
      return
    }

    parseNode(node.left, level + 1)
    parseNode(node.right, level + 1)

    const heightOnLeft = node.left ? nodes.get(node.left.val).height + 1 : 0
    const heightOnRight = node.right ? nodes.get(node.right.val).height + 1 : 0

    nodes.set(node.val, {
      level,
      height: Math.max(heightOnLeft, heightOnRight),
    })

    if (levels[level] === undefined) {
      levels[level] = []
    }

    levels[level].push(node.val)
  }

  parseNode(root, 0)

  //we sort the nodes on each level depending on their height
  for (const level of levels) {
    level.sort((a, b) => nodes.get(b).height - nodes.get(a).height)
  }

  const result = queries.reduce((acc, query) => {
    const {level} = nodes.get(query)
    const [maxNode, secondMaxNode] = levels[level] // we only need the longest nodes on each level to compute

    // if the node is not part of the longest height, query did not impact anything.
    if (query !== maxNode) {
      return [...acc, nodes.get(root.val).height]
    }

    // if this node is the only one on the level, it impacts the height, we will subtract its height + 1, since the parent will not have any other child
    if (secondMaxNode === undefined) {
      return [...acc, nodes.get(root.val).height - nodes.get(query).height - 1]
    }

    // if the node has a cousin that will be used to calculate the new height, we will add that height and subtract this node's height.
    return [
      ...acc,
      nodes.get(root.val).height -
        nodes.get(query).height +
        nodes.get(secondMaxNode).height,
    ]
  }, [])

  return result
}

export {treeQueries}
