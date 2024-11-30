/**
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/description
 * 
 * We do a in-order DFS and add the nodes in an array, so they are in order.
 * Then we go through the nodes in the array and add new links.
 */

import {TreeNode} from '@typings'

type _Node = TreeNode

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *
 *     constructor(val?: number, left?: _Node | null, right?: _Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function treeToDoublyList(root: _Node | null): _Node | null {
  const nodesInOrder: _Node[] = []

  function parseNode(node: _Node): void {
    if (!node) {
      return
    }

    parseNode(node.left)

    nodesInOrder.push(node)

    parseNode(node.right)
  }

  parseNode(root)

  for (let index = 0; index < nodesInOrder.length; index++) {
    nodesInOrder[index].left =
      nodesInOrder[index - 1] ?? nodesInOrder[nodesInOrder.length - 1]
    nodesInOrder[index].right = nodesInOrder[index + 1] ?? nodesInOrder[0]
  }

  return nodesInOrder[0]
}

export {treeToDoublyList}
