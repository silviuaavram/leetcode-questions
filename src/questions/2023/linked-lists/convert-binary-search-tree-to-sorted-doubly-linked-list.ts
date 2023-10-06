import {TreeNode as Node} from '@typings'

/**
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 *
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function treeToDoublyList(root: Node | null): Node | null {
  if (!root) {
    return null
  }

  const nodes: Node[] = []

  // InOrder Traversal
  function processNode(node: Node) {
    if (node.left) {
      processNode(node.left)
    }

    nodes.push(node)

    if (node.right) {
      processNode(node.right)
    }
  }

  processNode(root)

  for (let index = 0; index < nodes.length; index++) {
    const currentNode = nodes[index]
    const nextNode = nodes[index + 1] ?? nodes[0]
    const previousNode = nodes[index - 1] ?? nodes[nodes.length - 1]

    currentNode.left = previousNode
    currentNode.right = nextNode
  }

  return nodes[0]
}

export {treeToDoublyList}
