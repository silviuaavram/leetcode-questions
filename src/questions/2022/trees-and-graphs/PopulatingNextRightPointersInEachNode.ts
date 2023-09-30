/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import {TreeNode} from '@typings'

export type Node = TreeNode & {next: Node}

export function connect(root: Node | null): Node | null {
  if (!root) {
    return null
  }

  const queue = [root]
  const nextLevelQueue = []
  const result = [[root]]

  while (queue.length) {
    const currentNode = queue.splice(0, 1)[0]

    if (currentNode.left) {
      nextLevelQueue.push(currentNode.left)
    }
    if (currentNode.right) {
      nextLevelQueue.push(currentNode.right)
    }

    if (!queue.length && nextLevelQueue.length) {
      queue.push(...nextLevelQueue)
      result.push([...nextLevelQueue])
      nextLevelQueue.length = 0
    }
  }

  for (let levelIndex = 0; levelIndex < result.length; levelIndex++) {
    for (
      let nodeIndex = 0;
      nodeIndex < result[levelIndex].length;
      nodeIndex++
    ) {
      result[levelIndex][nodeIndex].next =
        result[levelIndex][nodeIndex + 1] ?? null
    }
  }

  return root
}
