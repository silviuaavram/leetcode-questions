/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description
 *
 * We will pick a tree traversal to both serialize and deserialize the tree.
 * The pick below is a pre-order dfs, root-left-right.
 * To serialize, we do the traversal, and add each node, including nulls, in an array.
 * To deserialize, we get each value in the array, and create nodes while traversing with a stack.
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const traversal = []

  function parseNode(node: TreeNode | null) {
    if (!node) {
      traversal.push(null)

      return
    }

    traversal.push(node.val)

    parseNode(node.left)
    parseNode(node.right)
  }

  parseNode(root)

  return traversal.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const path = data.split(',')

  const nodeStack: TreeNode[] = []
  let head = null

  while (path.length) {
    const nodeVal = path.splice(0, 1)[0]
    const node =
      nodeVal === ''
        ? null
        : ({
            val: Number(nodeVal),
            left: undefined,
            right: undefined,
          } as unknown as TreeNode)

    if (!nodeStack.length) {
      head = node
    } else {
      if (nodeStack[nodeStack.length - 1].left === undefined) {
        nodeStack[nodeStack.length - 1].left = node
      } else {
        nodeStack[nodeStack.length - 1].right = node
        nodeStack.pop()
      }
    }

    node && nodeStack.push(node)
  }

  return head
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

export {serialize, deserialize}
