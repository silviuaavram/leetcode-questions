/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description
 *
 * We do a straight BFS and keep track of each node's level.
 * If the next node has the same level, it's the current level's next.
 * Otherwise, the next is null.
 * Since we check the next node while iterating, we need to break exit when parsing the last node.
 */

export type _Node = {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null
}

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null
  }

  const queue = [{node: root, level: 1}]

  while (queue.length) {
    const {node, level} = queue.splice(0, 1)[0]

    if (node.left) {
      queue.push({node: node.left, level: level + 1})
      queue.push({node: node.right, level: level + 1})
    }

    if (queue.length === 0) {
      node.next = null
      break
    }

    const {node: nextNode, level: nextLevel} = queue[0]

    if (level === nextLevel) {
      node.next = nextNode
    } else {
      node.next = null
    }
  }

  return root
}

export {connect}
